import React from 'react';

const AdminBanner = () => {
  return (
    <div className="bg-bmw-blue text-white px-4 py-2 text-center">
      <div className="container flex justify-between items-center">
        <span className="font-bold">Admin Preview Mode</span>
        <div className="flex gap-4">
          <button className="text-sm bg-white text-bmw-blue px-3 py-1 rounded">
            Exit Preview
          </button>
          <button className="text-sm bg-bmw-accent text-white px-3 py-1 rounded">
            Edit Page
          </button>
          <select className="text-sm bg-white text-bmw-dark px-3 py-1 rounded">
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