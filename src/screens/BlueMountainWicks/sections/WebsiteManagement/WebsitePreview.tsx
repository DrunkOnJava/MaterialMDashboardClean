import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";

const WebsitePreview = () => {
  const [activeView, setActiveView] = useState("desktop");
  const [activePage, setActivePage] = useState("home");

  // This would be the URL of the deployed frontend website
  // In a real implementation, this would be an environment variable or configuration setting
  const websiteUrl = "https://blue-mountain-wicks.netlify.app";
  
  // In a real implementation, this would append admin authentication tokens
  const getPreviewUrl = () => {
    // Build the URL with the admin preview parameter
    const previewUrl = `${websiteUrl}/${activePage === "home" ? "" : activePage}?admin-preview=true`;
    
    // In a production environment, this would add authentication tokens
    // const authToken = "example-auth-token";
    // return `${previewUrl}&auth=${authToken}`;
    
    return previewUrl;
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
              <Button variant="outline">
                Edit Current Page
              </Button>
              <Button>
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