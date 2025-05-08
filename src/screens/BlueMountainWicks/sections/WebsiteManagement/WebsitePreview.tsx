import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { useToast } from "../../../../hooks/use-toast";

const WebsitePreview = () => {
  const [activeView, setActiveView] = useState("desktop");
  const [activePage, setActivePage] = useState("home");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { toast } = useToast();
  
  // Set up message event listener for communication from the website iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // In production, you would verify the origin of the message
      // For example: if (event.origin !== "https://blue-mountain-wicks.netlify.app") return;
      
      const { type, page, authToken } = event.data;
      
      // Handle different message types from the website
      if (type === 'EDIT_PAGE') {
        // Change the active tab in the content management component
        setActivePage(page);
        
        // Show toast notification
        toast({
          title: "Edit Page Requested",
          description: `Opening editor for ${page} page`,
          duration: 3000,
        });
        
        // In a real app, this would also trigger the edit interface
        console.log(`Edit requested for ${page} page with auth token: ${authToken}`);
      }
    };
    
    // Add event listener for messages
    window.addEventListener('message', handleMessage);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [toast]);

  // URL for the website - in development and production
  // In development, website will run on a different port than the dashboard
  // In production, it would be a deployed website URL like Netlify
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // In development, we'll use localhost with port 5174 (Vite's default second port)
  // In production, we use the deployed Netlify URL
  const websiteUrl = isDevelopment 
    ? "http://localhost:5174" 
    : "https://blue-mountain-wicks.netlify.app";
  
  // Function to get the preview URL with admin parameters
  const getPreviewUrl = () => {
    // Build the URL with the admin preview parameter
    const previewUrl = `${websiteUrl}/${activePage === "home" ? "" : activePage}?admin-preview=true`;
    
    // In a real application, we'd add authentication tokens for security
    // This would validate that the preview request is coming from the admin dashboard
    const authToken = "example-admin-token-123";
    const finalUrl = `${previewUrl}&auth=${authToken}`;
    
    return finalUrl;
  };
  
  // Function to send messages to the iframe
  const sendMessageToWebsite = (message: any) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(message, '*');
      
      // In production, always specify exact target origin for security
      // iframeRef.current.contentWindow.postMessage(message, websiteUrl);
    }
  };

  return (
    <Card className="shadow-light-theme-shadow-medium">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-lg font-normal">Website Preview</CardTitle>
        <div className="flex space-x-2">
          <Select value={activePage} onValueChange={setActivePage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home">Home Page</SelectItem>
              <SelectItem value="shop">Shop Page</SelectItem>
              <SelectItem value="about">About Page</SelectItem>
              <SelectItem value="contact">Contact Page</SelectItem>
            </SelectContent>
          </Select>
          <Tabs value={activeView} onValueChange={setActiveView} className="ml-2">
            <TabsList>
              <TabsTrigger value="desktop" className="px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </TabsTrigger>
              <TabsTrigger value="tablet" className="px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </TabsTrigger>
              <TabsTrigger value="mobile" className="px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="bg-blackblack-10 rounded-lg p-4 flex justify-center">
            <div
              className={`bg-white overflow-hidden ${
                activeView === "desktop" ? "w-full h-[600px]" : 
                activeView === "tablet" ? "w-[768px] h-[1024px]" : 
                "w-[375px] h-[667px]"
              }`}
            >
              <div className="w-full h-full overflow-hidden border border-surfaceslightborder-color rounded-md">
                <iframe
                  ref={iframeRef}
                  src={getPreviewUrl()}
                  title="Website Preview"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-actionsuccess mr-2"></div>
              <span className="text-sm">Live Status: Active</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => {
                // In a real app, this would directly open the edit interface for the current page
                // For now, let's just notify the website that we want to edit this page
                sendMessageToWebsite({
                  type: 'DASHBOARD_EDIT',
                  page: activePage,
                  action: 'openEditor'
                });
                
                // Also show a toast notification
                toast({
                  title: "Edit Page Requested",
                  description: `Opening editor for ${activePage} page`,
                  duration: 3000,
                });
              }}>
                Edit Current Page
              </Button>
              <Button onClick={() => {
                window.open(getPreviewUrl(), '_blank');
              }}>
                Open in New Tab
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebsitePreview;