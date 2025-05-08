import React, { useState } from "react";
import WebsitePreview from "./WebsitePreview";
import ContentManagement from "./ContentManagement";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { useToast } from "../../../../hooks/use-toast";
import { AlertCircle, Upload, CheckCircle2, Globe, RefreshCw, Wifi, Zap } from "lucide-react";

// Mock deployment history data
interface DeploymentRecord {
  id: string;
  date: string;
  status: 'success' | 'failed';
  user: string;
  changes: string;
  environment: string;
}

const initialDeploymentHistory: DeploymentRecord[] = [
  {
    id: "deploy-123",
    date: "2025-05-07 14:32:12",
    status: 'success',
    user: "Jane Smith",
    changes: "Updated homepage hero image and text",
    environment: "Production"
  },
  {
    id: "deploy-122",
    date: "2025-05-05 10:15:33",
    status: 'success',
    user: "Jane Smith",
    changes: "Added spring collection products",
    environment: "Production"
  },
  {
    id: "deploy-121",
    date: "2025-05-03 16:42:01",
    status: 'failed',
    user: "John Doe",
    changes: "Updated about page content",
    environment: "Production"
  },
  {
    id: "deploy-120",
    date: "2025-05-01 09:28:45",
    status: 'success',
    user: "Jane Smith",
    changes: "Fixed mobile navigation issues",
    environment: "Production"
  }
];

const WebsiteManagement = () => {
  const [publishState, setPublishState] = useState<'idle' | 'publishing' | 'published' | 'error'>('idle');
  const [lastPublished, setLastPublished] = useState<string | null>("2025-05-07 14:32:12");
  const [deploymentHistory, setDeploymentHistory] = useState<DeploymentRecord[]>(initialDeploymentHistory);
  const { toast } = useToast();

  // Function to handle publishing changes
  const handlePublishChanges = () => {
    setPublishState('publishing');
    
    // Simulate publication process with a timer
    // In a real app, this would be an API call to trigger a deployment
    setTimeout(() => {
      // 90% chance of success, 10% chance of failure for demo purposes
      const success = Math.random() < 0.9;
      const now = new Date();
      const formattedDate = now.toISOString().replace('T', ' ').substring(0, 19);
      
      // Create a new deployment record
      const newDeployment: DeploymentRecord = {
        id: `deploy-${124 + deploymentHistory.length}`,
        date: formattedDate,
        status: success ? 'success' : 'failed',
        user: "Jane Smith",
        changes: "Updated website content",
        environment: "Production"
      };
      
      // Update the deployment history
      setDeploymentHistory([newDeployment, ...deploymentHistory]);
      
      if (success) {
        setPublishState('published');
        setLastPublished(formattedDate);
        
        toast({
          title: "Website published successfully",
          description: "Your changes are now live on the website.",
          duration: 5000,
        });
        
        // Reset back to idle after 3 seconds
        setTimeout(() => {
          setPublishState('idle');
        }, 3000);
      } else {
        setPublishState('error');
        
        toast({
          title: "Publication failed",
          description: "There was an error publishing your changes. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    }, 2500);
  };

  return (
    <Card className="rounded-xl shadow-light-theme-shadow-medium mb-6">
      <CardHeader className="border-b border-[#111c2d1a] px-6 py-4 flex flex-row justify-between items-center space-y-0">
        <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
          Website Management
        </CardTitle>
        <div className="flex items-center gap-4">
          {lastPublished && (
            <div className="text-sm text-blackblack-60">
              Last published: {lastPublished}
            </div>
          )}
          <Button 
            variant={publishState === 'error' ? "destructive" : "default"}
            disabled={publishState === 'publishing'}
            onClick={handlePublishChanges}
            className="flex items-center gap-2"
          >
            {publishState === 'idle' && (
              <>
                <Upload size={16} />
                Publish Changes
              </>
            )}
            {publishState === 'publishing' && (
              <>
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                Publishing...
              </>
            )}
            {publishState === 'published' && (
              <>
                <CheckCircle2 size={16} />
                Published!
              </>
            )}
            {publishState === 'error' && (
              <>
                <AlertCircle size={16} />
                Try Again
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* Deployment Status Indicator */}
        <div className="mb-6 bg-surfaceslightgray-10 rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3">Deployment Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="p-2 rounded-full bg-light-themeprimarylight-blue mb-2">
                  <Globe className="h-5 w-5 text-light-themeprimaryblue" />
                </div>
                <div className="text-sm font-medium">Environment</div>
                <div className="text-xs text-light-themeprimaryblue">Production</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="p-2 rounded-full bg-actionsuccesslight mb-2">
                  <Zap className="h-5 w-5 text-actionsuccess" />
                </div>
                <div className="text-sm font-medium">Status</div>
                <div className="text-xs text-actionsuccess">Live</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="p-2 rounded-full bg-light-themesecondarylight-purple mb-2">
                  <RefreshCw className="h-5 w-5 text-light-themesecondarypurple" />
                </div>
                <div className="text-sm font-medium">Build Status</div>
                <div className="text-xs text-light-themesecondarypurple">No Pending Builds</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="p-2 rounded-full bg-actionwarninglight mb-2">
                  <Wifi className="h-5 w-5 text-actionwarning" />
                </div>
                <div className="text-sm font-medium">Response Time</div>
                <div className="text-xs text-actionwarning">156ms</div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <WebsitePreview />
            
            {/* Deployment History */}
            <Card className="shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] pb-2">
                <CardTitle className="text-lg font-normal">Deployment History</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-auto max-h-[300px]">
                  <table className="w-full">
                    <thead className="bg-surfaceslightgray-10 sticky top-0">
                      <tr>
                        <th className="text-sm font-medium text-left p-3">Date</th>
                        <th className="text-sm font-medium text-left p-3">Status</th>
                        <th className="text-sm font-medium text-left p-3">User</th>
                        <th className="text-sm font-medium text-left p-3">Changes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surfaceslightgray-10">
                      {deploymentHistory.map((deployment) => (
                        <tr key={deployment.id} className="hover:bg-surfaceslightgray-10/50">
                          <td className="p-3 text-sm">{deployment.date}</td>
                          <td className="p-3">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                              deployment.status === 'success' 
                                ? 'bg-actionsuccesslight text-actionsuccess' 
                                : 'bg-actionwarninglight text-actiondanger'
                            }`}>
                              {deployment.status === 'success' ? (
                                <>
                                  <CheckCircle2 className="h-3 w-3 mr-1" />
                                  Success
                                </>
                              ) : (
                                <>
                                  <AlertCircle className="h-3 w-3 mr-1" />
                                  Failed
                                </>
                              )}
                            </span>
                          </td>
                          <td className="p-3 text-sm">{deployment.user}</td>
                          <td className="p-3 text-sm">{deployment.changes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <ContentManagement />
        </div>
      </CardContent>
    </Card>
  );
};

export default WebsiteManagement;