import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Card, CardContent } from "../../../components/ui/card";
import { ExternalLink, Smartphone, Laptop, Tablet, X, Maximize, Minimize } from "lucide-react";

interface WebsitePreviewProps {
  trigger?: React.ReactNode;
  fullWidth?: boolean;
}

export const WebsitePreview: React.FC<WebsitePreviewProps> = ({ 
  trigger, 
  fullWidth = false 
}) => {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Website URL - in a real app, this would be configurable
  const websiteUrl = "https://blue-mountain-wicks.netlify.app";

  // Function to handle external website navigation
  const handleNavigateToWebsite = () => {
    window.open(`${websiteUrl}?admin-preview=true`, "_blank");
  };

  // Get frame width based on selected device
  const getFrameWidth = () => {
    switch (device) {
      case "desktop":
        return "100%";
      case "tablet":
        return "768px";
      case "mobile":
        return "375px";
      default:
        return "100%";
    }
  };

  // Get frame class based on selected device and fullscreen state
  const getFrameClass = () => {
    let baseClass = "bg-white border border-blackblack-10 rounded-lg mx-auto transition-all duration-300";
    
    if (isFullscreen) {
      return `${baseClass} w-full h-[calc(100vh-200px)]`;
    }
    
    switch (device) {
      case "desktop":
        return `${baseClass} w-full h-[600px]`;
      case "tablet":
        return `${baseClass} w-[768px] h-[1024px] max-h-[80vh]`;
      case "mobile":
        return `${baseClass} w-[375px] h-[667px] max-h-[80vh]`;
      default:
        return `${baseClass} w-full h-[600px]`;
    }
  };

  const defaultTrigger = (
    <Button 
      variant="outline" 
      className="flex items-center gap-1"
      onClick={(e) => e.preventDefault()}
    >
      <ExternalLink className="h-4 w-4 mr-1" />
      View Website
    </Button>
  );

  const content = (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      <div className="flex justify-between items-center mb-4">
        <TabsList>
          <TabsTrigger 
            value="desktop" 
            onClick={() => setDevice("desktop")}
            className={device === "desktop" ? "bg-light-themeprimarylight-blue text-light-themeprimaryblue" : ""}
          >
            <Laptop className="h-4 w-4 mr-1" />
            <span>Desktop</span>
          </TabsTrigger>
          <TabsTrigger 
            value="tablet" 
            onClick={() => setDevice("tablet")}
            className={device === "tablet" ? "bg-light-themeprimarylight-blue text-light-themeprimaryblue" : ""}
          >
            <Tablet className="h-4 w-4 mr-1" />
            <span>Tablet</span>
          </TabsTrigger>
          <TabsTrigger 
            value="mobile" 
            onClick={() => setDevice("mobile")}
            className={device === "mobile" ? "bg-light-themeprimarylight-blue text-light-themeprimaryblue" : ""}
          >
            <Smartphone className="h-4 w-4 mr-1" />
            <span>Mobile</span>
          </TabsTrigger>
        </TabsList>
        
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>
          <Button variant="default" onClick={handleNavigateToWebsite}>
            <ExternalLink className="h-4 w-4 mr-1" />
            Open in Browser
          </Button>
        </div>
      </div>
      
      <div className="overflow-auto p-4 bg-surfaceslightgray-10 rounded-lg">
        <div className={getFrameClass()}>
          {/* Create an iframe to show the actual website */}
          <iframe
            src={`${websiteUrl}?admin-preview=true`}
            title="Blue Mountain Wicks Website"
            className="w-full h-full border-0"
            sandbox="allow-same-origin allow-scripts allow-forms"
          ></iframe>
        </div>
      </div>
    </div>
  );

  // If fullWidth is true, directly return the content
  if (fullWidth) {
    return content;
  }

  // Otherwise, wrap in a dialog
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] w-[1200px]">
        <DialogHeader>
          <DialogTitle>Blue Mountain Wicks Website</DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default WebsitePreview;