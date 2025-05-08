import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminBanner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('Home Page');
  const [authToken, setAuthToken] = useState(null);
  
  // Extract information from URL on component mount
  useEffect(() => {
    // Parse current URL to get page name
    const pathname = location.pathname;
    
    if (pathname === '/' || pathname === '') {
      setCurrentPage('Home Page');
    } else if (pathname === '/shop') {
      setCurrentPage('Product List');
    } else if (pathname === '/about') {
      setCurrentPage('About Page');
    } else if (pathname === '/contact') {
      setCurrentPage('Contact Page');
    }
    
    // Extract auth token from URL if present
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has('auth')) {
      setAuthToken(searchParams.get('auth'));
    }
  }, [location]);
  
  // Set up message event listener for communication from dashboard
  useEffect(() => {
    const handleMessage = (event) => {
      // In production, you would verify the origin of the message
      // For example: if (event.origin !== "https://your-dashboard-domain.com") return;
      
      const { type, page, action } = event.data;
      
      // Handle different message types from the dashboard
      if (type === 'DASHBOARD_EDIT') {
        // Highlight the page being edited or show a notification
        console.log(`Dashboard requested to ${action} for ${page} page`);
        
        // You could show a visual indicator or trigger a specific UI component
        // For a real application, this would trigger the edit interface
        if (action === 'openEditor') {
          // For demo purposes, we're just showing an alert
          alert(`Dashboard is opening editor for ${page} page`);
        }
      }
    };
    
    // Add event listener for messages
    window.addEventListener('message', handleMessage);
    
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  
  // Function to exit preview mode
  const exitPreview = () => {
    // Remove admin preview parameters and reload
    const pathname = location.pathname;
    window.location.href = pathname;
  };
  
  // Function to handle page change from dropdown
  const handlePageChange = (e) => {
    const selectedPage = e.target.value;
    setCurrentPage(selectedPage);
    
    // Navigate to the correct page while preserving admin parameters
    let path = '/';
    
    if (selectedPage === 'Product List') {
      path = '/shop';
    } else if (selectedPage === 'About Page') {
      path = '/about';
    } else if (selectedPage === 'Contact Page') {
      path = '/contact';
    }
    
    // Preserve admin parameters in navigation
    navigate(`${path}?admin-preview=true${authToken ? `&auth=${authToken}` : ''}`);
  };
  
  // Function to edit the current page in the dashboard
  const editCurrentPage = () => {
    // In a real implementation, this would send a message to the parent dashboard
    // to open the editor for the current page
    
    if (window.parent && window.parent !== window) {
      // Send message to parent (dashboard) if in iframe
      window.parent.postMessage({
        type: 'EDIT_PAGE',
        page: currentPage.toLowerCase().replace(' page', ''),
        authToken
      }, '*');
    } else {
      // If opened directly (not in iframe), could redirect to dashboard
      alert('Edit interface would open in dashboard.');
    }
  };
  
  return (
    <div className="bg-blue-700 text-white px-4 py-2 text-center">
      <div className="container flex justify-between items-center">
        <span className="font-bold">Admin Preview Mode</span>
        <div className="flex gap-4">
          <button 
            className="text-sm bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100"
            onClick={exitPreview}
          >
            Exit Preview
          </button>
          <button 
            className="text-sm bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
            onClick={editCurrentPage}
          >
            Edit Page
          </button>
          <select 
            className="text-sm bg-white text-gray-800 px-3 py-1 rounded"
            value={currentPage}
            onChange={handlePageChange}
          >
            <option>Home Page</option>
            <option>Product List</option>
            <option>About Page</option>
            <option>Contact Page</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdminBanner;