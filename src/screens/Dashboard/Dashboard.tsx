import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TitlebarByAnima } from "./components/Titlebar";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { NewProjectForm } from "./components/NewProjectForm";
import { format } from "date-fns";
import { 
  BarChart3, 
  CalendarDays, 
  Clock, 
  FileText, 
  FolderOpen, 
  ListChecks, 
  Plus, 
  Search, 
  Settings, 
  Users 
} from "lucide-react";

// Define project interface
interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  completion: number;
  dueDate: string;
  members: number;
  tasks: {
    total: number;
    completed: number;
  };
  path?: string;
  type?: string;
  createdAt?: string;
}

// Initial project data
const initialProjects: Project[] = [
  {
    id: "bmw",
    name: "Blue Mountain Wicks",
    description: "E-commerce website for handcrafted candles",
    status: "In Progress",
    completion: 75,
    dueDate: "2025-06-15",
    members: 4,
    tasks: {
      total: 24,
      completed: 18
    },
    path: "/blue-mountain-wicks",
    type: "website",
    createdAt: "2025-05-01T08:30:00Z"
  },
  // In the future, more projects could be added here
];

// Project Dashboard Statistics
interface ProjectStatsSectionProps {
  projects: Project[];
}

const ProjectStatsSection: React.FC<ProjectStatsSectionProps> = ({ projects }) => {
  // Calculate stats from projects data
  const totalProjects = projects.length;
  
  const activeTasks = projects.reduce((total, project) => {
    // Active tasks are those that are not completed
    return total + (project.tasks.total - project.tasks.completed);
  }, 0);
  
  const totalTeamMembers = projects.reduce((total, project) => {
    return total + project.members;
  }, 0);
  
  // Count upcoming deadlines (due dates within the next 30 days)
  const upcomingDeadlines = projects.filter(project => {
    const dueDate = new Date(project.dueDate);
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);
    
    return dueDate > today && dueDate <= thirtyDaysFromNow;
  }).length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blackblack-60">Total Projects</p>
              <h3 className="text-2xl font-medium mt-1">{totalProjects}</h3>
            </div>
            <div className="w-12 h-12 bg-light-themeprimarylight-blue rounded-full flex items-center justify-center">
              <FolderOpen className="h-6 w-6 text-light-themeprimaryblue" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blackblack-60">Active Tasks</p>
              <h3 className="text-2xl font-medium mt-1">{activeTasks}</h3>
            </div>
            <div className="w-12 h-12 bg-actionsuccesslight rounded-full flex items-center justify-center">
              <ListChecks className="h-6 w-6 text-actionsuccess" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blackblack-60">Team Members</p>
              <h3 className="text-2xl font-medium mt-1">{totalTeamMembers}</h3>
            </div>
            <div className="w-12 h-12 bg-light-themesecondarylight-purple rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-light-themesecondarypurple" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blackblack-60">Upcoming Deadlines</p>
              <h3 className="text-2xl font-medium mt-1">{upcomingDeadlines}</h3>
            </div>
            <div className="w-12 h-12 bg-actionwarninglight rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-actionwarning" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Projects List Section
interface ProjectsListSectionProps {
  projects: Project[];
  onAddProject: (project: Project) => void;
}

const ProjectsListSection: React.FC<ProjectsListSectionProps> = ({ projects, onAddProject }) => (
  <Card className="mb-6">
    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
      <CardTitle className="text-lg font-normal">Projects</CardTitle>
      <NewProjectForm onAddProject={onAddProject} />
    </CardHeader>
    <CardContent className="p-0">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-surfaceslightgray-10">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-blackblack-60 tracking-wider">Project</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-blackblack-60 tracking-wider">Status</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-blackblack-60 tracking-wider">Progress</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-blackblack-60 tracking-wider">Due Date</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-blackblack-60 tracking-wider">Team</th>
              <th className="py-3 px-6 text-xs font-medium text-blackblack-60 tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surfaceslightgray-10 bg-white">
            {projects.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-6 px-6 text-center text-blackblack-60">
                  No projects found. Click "Add Project" to create your first project.
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr key={project.id} className="hover:bg-surfaceslightgray-10/50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-light-themeprimarylight-blue rounded-md flex items-center justify-center">
                        <span className="text-light-themeprimaryblue font-medium">{project.name.substring(0, 2)}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-blackblack-100">{project.name}</div>
                        <div className="text-xs text-blackblack-60">{project.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === "In Progress" ? "bg-actionsuccesslight text-actionsuccess" :
                      project.status === "Planning" ? "bg-light-themeprimarylight-blue text-light-themeprimaryblue" :
                      project.status === "On Hold" ? "bg-actionwarninglight text-actionwarning" :
                      project.status === "Completed" ? "bg-light-themesecondarylight-purple text-light-themesecondarypurple" :
                      "bg-surfaceslightgray-10 text-blackblack-60"
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-full bg-surfaceslightgray-10 rounded-full h-2.5">
                        <div className="bg-light-themeprimaryblue h-2.5 rounded-full" style={{ width: `${project.completion}%` }}></div>
                      </div>
                      <span className="text-xs font-medium text-blackblack-60 ml-2">{project.completion}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 text-blackblack-60 mr-2" />
                      <span className="text-sm text-blackblack-100">{project.dueDate}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex -space-x-2">
                      {[...Array(project.members)].map((_, i) => (
                        <Avatar key={i} className="h-7 w-7 border-2 border-white">
                          <AvatarFallback className="bg-light-themeprimarylight-blue text-light-themeprimaryblue text-xs">
                            {String.fromCharCode(65 + i)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Button variant="outline" size="sm" className="mr-2" asChild>
                      <a href={project.path || "#"}>View</a>
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

// Recent Activity Section
const RecentActivitySection = () => (
  <Card className="mb-6">
    <CardHeader className="pb-2 space-y-0">
      <CardTitle className="text-lg font-normal">Recent Activity</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="bg-light-themeprimarylight-blue rounded-full p-2">
            <FileText className="h-4 w-4 text-light-themeprimaryblue" />
          </div>
          <div>
            <div className="flex items-center">
              <span className="font-medium">Website content updated</span>
              <span className="text-xs text-blackblack-60 ml-2">2 hours ago</span>
            </div>
            <p className="text-sm text-blackblack-60">Jane Smith updated the Blue Mountain Wicks website content</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-actionsuccesslight rounded-full p-2">
            <ListChecks className="h-4 w-4 text-actionsuccess" />
          </div>
          <div>
            <div className="flex items-center">
              <span className="font-medium">Task completed</span>
              <span className="text-xs text-blackblack-60 ml-2">4 hours ago</span>
            </div>
            <p className="text-sm text-blackblack-60">John Doe completed "Implement product details page"</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-light-themesecondarylight-purple rounded-full p-2">
            <Users className="h-4 w-4 text-light-themesecondarypurple" />
          </div>
          <div>
            <div className="flex items-center">
              <span className="font-medium">New team member</span>
              <span className="text-xs text-blackblack-60 ml-2">Yesterday</span>
            </div>
            <p className="text-sm text-blackblack-60">Sarah Johnson joined the Blue Mountain Wicks project</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Main Dashboard Component
export const Dashboard = (): JSX.Element => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("overview");
  
  // State to manage projects
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  
  // Function to add a new project
  const handleAddProject = (newProject: Project) => {
    // In a real application, this would make an API call to save the project
    // Format date and set default path
    const formattedProject = {
      ...newProject,
      path: `/projects/${newProject.id}`,
      dueDate: newProject.dueDate ? format(new Date(newProject.dueDate), 'yyyy-MM-dd') : '',
    };
    
    setProjects(prev => [formattedProject, ...prev]);
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Project Management Dashboard" />
        <main className="flex-1 overflow-auto p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 bg-white p-1 rounded-lg">
              <TabsTrigger value="overview" className="px-6">
                <BarChart3 className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="projects" className="px-6">
                <FolderOpen className="h-4 w-4 mr-2" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="tasks" className="px-6">
                <ListChecks className="h-4 w-4 mr-2" />
                Tasks
              </TabsTrigger>
              <TabsTrigger value="team" className="px-6">
                <Users className="h-4 w-4 mr-2" />
                Team
              </TabsTrigger>
              <TabsTrigger value="settings" className="px-6">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <ProjectStatsSection projects={projects} />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <ProjectsListSection 
                    projects={projects} 
                    onAddProject={handleAddProject} 
                  />
                </div>
                <div>
                  <RecentActivitySection />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="projects">
              <ProjectsListSection 
                projects={projects} 
                onAddProject={handleAddProject} 
              />
            </TabsContent>
            
            <TabsContent value="tasks">
              <Card>
                <CardHeader className="pb-2 space-y-0">
                  <CardTitle className="text-lg font-normal">Tasks Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blackblack-60">
                    The tasks management section allows you to create, assign, and track tasks across all your projects.
                    This feature will be implemented in a future update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team">
              <Card>
                <CardHeader className="pb-2 space-y-0">
                  <CardTitle className="text-lg font-normal">Team Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blackblack-60">
                    The team management section allows you to manage team members, roles, and permissions across your projects.
                    This feature will be implemented in a future update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader className="pb-2 space-y-0">
                  <CardTitle className="text-lg font-normal">Dashboard Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blackblack-60">
                    The settings section allows you to customize your project management dashboard, 
                    notification preferences, and default views.
                    This feature will be implemented in a future update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};