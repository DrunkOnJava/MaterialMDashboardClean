import React, { useState } from "react";
import { SidebarByAnima } from "../Chip/sections/SidebarByAnima";
import { TitlebarByAnima } from "./components/Titlebar";
import { TopBarByAnima } from "../Chip/sections/TopBarByAnima";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { NewProjectForm } from "./components/NewProjectForm";
import { ProjectCard } from "./components/ProjectCard";
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
  Users,
  PlusCircle,
  Briefcase,
  Target,
  TrendingUp,
  LineChart
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

  // Calculate completion percentage across all projects
  const averageCompletion = projects.length > 0 
    ? Math.round(projects.reduce((sum, project) => sum + project.completion, 0) / projects.length) 
    : 0;
  
  const stats = [
    {
      title: "Total Projects",
      value: totalProjects,
      icon: <Briefcase className="h-5 w-5" />,
      change: "+8%",
      isPositive: true,
      bgColor: "bg-light-themeprimarylight-blue",
      textColor: "text-light-themeprimaryblue"
    },
    {
      title: "Active Tasks",
      value: activeTasks,
      icon: <ListChecks className="h-5 w-5" />,
      change: "+5%",
      isPositive: true,
      bgColor: "bg-actionsuccesslight",
      textColor: "text-actionsuccess"
    },
    {
      title: "Team Members",
      value: totalTeamMembers,
      icon: <Users className="h-5 w-5" />,
      change: "0%",
      isPositive: true,
      bgColor: "bg-light-themesecondarylight-purple",
      textColor: "text-light-themesecondarypurple"
    },
    {
      title: "Upcoming Deadlines",
      value: upcomingDeadlines,
      icon: <Target className="h-5 w-5" />,
      change: "-12%",
      isPositive: false,
      bgColor: "bg-actionwarninglight",
      textColor: "text-actionwarning"
    },
    {
      title: "Avg. Completion",
      value: `${averageCompletion}%`,
      icon: <TrendingUp className="h-5 w-5" />,
      change: "+15%",
      isPositive: true,
      bgColor: "bg-light-themeprimarylight-blue",
      textColor: "text-light-themeprimaryblue"
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-sm">
          <CardContent className="px-6 py-5">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 ${stat.bgColor} rounded-full flex items-center justify-center ${stat.textColor}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-xs font-medium text-blackblack-60">{stat.title}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold">{stat.value}</p>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full flex items-center ${
                    stat.isPositive ? 'bg-actionsuccesslight text-actionsuccess' : 'bg-actionwarninglight text-actionwarning'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Projects List Section
interface ProjectsListSectionProps {
  projects: Project[];
  onAddProject: (project: Project) => void;
  viewType?: 'grid' | 'table';
}

const ProjectsListSection: React.FC<ProjectsListSectionProps> = ({ 
  projects, 
  onAddProject,
  viewType = 'grid'
}) => {
  const handleViewProject = (id: string) => {
    console.log(`Viewing project: ${id}`);
    // In a real app, you might navigate to the project detail page here
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Projects</h2>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1.5 text-light-themeprimaryblue hover:text-light-themeprimaryblue hover:bg-light-themeprimarylight-blue/50"
            onClick={() => {}}
          >
            <PlusCircle size={16} />
            Add Project
          </Button>
        </div>
      </div>

      {viewType === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <Card className="col-span-full py-12">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-light-themeprimarylight-blue rounded-full flex items-center justify-center text-light-themeprimaryblue mb-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">No Projects Found</h3>
                <p className="text-blackblack-60 mb-6 max-w-md">You don't have any projects yet. Click the button below to create your first project.</p>
                <Button
                  variant="default"
                  className="flex items-center gap-1.5"
                  onClick={() => {}}
                >
                  <PlusCircle size={16} />
                  Create Project
                </Button>
              </CardContent>
            </Card>
          ) : (
            projects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onView={handleViewProject}
              />
            ))
          )}
        </div>
      ) : (
        <Card className="border-0 shadow-sm">
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
      )}
    </div>
  );
};

// Recent Activity Section
const RecentActivitySection = () => {
  const activities = [
    {
      icon: <FileText className="h-4 w-4" />,
      title: "Website content updated",
      description: "Jane Smith updated the Blue Mountain Wicks website content",
      time: "2 hours ago",
      iconBg: "bg-light-themeprimarylight-blue",
      iconColor: "text-light-themeprimaryblue"
    },
    {
      icon: <ListChecks className="h-4 w-4" />,
      title: "Task completed",
      description: "John Doe completed \"Implement product details page\"",
      time: "4 hours ago",
      iconBg: "bg-actionsuccesslight",
      iconColor: "text-actionsuccess"
    },
    {
      icon: <Clock className="h-4 w-4" />,
      title: "Deadline approaching",
      description: "Project \"Blue Mountain Wicks\" is due in 3 days",
      time: "Yesterday",
      iconBg: "bg-actionwarninglight",
      iconColor: "text-actionwarning"
    },
    {
      icon: <Users className="h-4 w-4" />,
      title: "New team member",
      description: "Sarah Johnson joined the Blue Mountain Wicks project",
      time: "2 days ago",
      iconBg: "bg-light-themesecondarylight-purple",
      iconColor: "text-light-themesecondarypurple"
    },
    {
      icon: <MessageSquare className="h-4 w-4" />,
      title: "Comment added",
      description: "Mike Wilson commented on the homepage redesign task",
      time: "3 days ago",
      iconBg: "bg-light-themeprimarylight-blue",
      iconColor: "text-light-themeprimaryblue"
    }
  ];

  return (
    <Card className="mb-6 border-0 shadow-sm">
      <CardHeader className="pb-2 pt-5 px-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
          <Button variant="ghost" size="sm" className="text-sm text-light-themeprimaryblue hover:text-light-themeprimaryblue hover:bg-light-themeprimarylight-blue/50">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-6 py-2">
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-surfaceslightgray-10"></div>
          
          <div className="space-y-5">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 relative z-10">
                <div className={`rounded-full p-2 ${activity.iconBg} ${activity.iconColor}`}>
                  {activity.icon}
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium text-blackblack-100">{activity.title}</span>
                    <span className="text-xs text-blackblack-60 sm:ml-2">{activity.time}</span>
                  </div>
                  <p className="text-sm text-blackblack-60 mt-1">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Dashboard Component
export const Dashboard = (): JSX.Element => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("overview");
  
  // State to manage view type for projects
  const [projectViewType, setProjectViewType] = useState<'grid' | 'table'>('grid');
  
  // State to manage projects
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  
  // Add more sample projects for demonstration
  React.useEffect(() => {
    // Add more sample projects for demonstration purposes
    if (projects.length === 1) {
      const additionalProjects: Project[] = [
        {
          id: "website-redesign",
          name: "Corporate Website Redesign",
          description: "Redesign the corporate website with modern UI/UX principles",
          status: "Planning",
          completion: 15,
          dueDate: "2025-08-20",
          members: 3,
          tasks: {
            total: 18,
            completed: 3
          },
          path: "/projects/website-redesign",
          type: "website",
          createdAt: "2025-05-01T10:30:00Z"
        },
        {
          id: "mobile-app",
          name: "Mobile App Development",
          description: "Develop a mobile application for customer engagement",
          status: "In Progress",
          completion: 45,
          dueDate: "2025-07-10",
          members: 5,
          tasks: {
            total: 32,
            completed: 14
          },
          path: "/projects/mobile-app",
          type: "mobile",
          createdAt: "2025-04-15T14:20:00Z"
        },
      ];
      
      setProjects(prev => [...prev, ...additionalProjects]);
    }
  }, [projects.length]);
  
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

  // Toggle project view type
  const toggleProjectViewType = () => {
    setProjectViewType(prev => prev === 'grid' ? 'table' : 'grid');
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="Project Management Dashboard" />
        <main className="flex-1 overflow-auto p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 bg-white p-1 rounded-lg shadow-sm">
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

              {/* Analytics summary */}
              <div className="mb-6">
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-medium">Project Performance</CardTitle>
                      <div className="flex items-center gap-4">
                        <select className="text-sm bg-white border border-surfaceslightgray-10 rounded-md px-3 py-1">
                          <option value="this-month">This Month</option>
                          <option value="last-month">Last Month</option>
                          <option value="this-quarter">This Quarter</option>
                          <option value="this-year">This Year</option>
                        </select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="h-[230px] flex items-center justify-center">
                    <div className="flex flex-col items-center text-blackblack-60">
                      <LineChart className="h-16 w-16 mb-2" />
                      <p>Analytics charts will be shown here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <ProjectsListSection 
                    projects={projects} 
                    onAddProject={handleAddProject}
                    viewType={projectViewType}
                  />
                </div>
                <div>
                  <RecentActivitySection />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="projects">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">All Projects</h2>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={toggleProjectViewType}
                    className="flex items-center gap-2"
                  >
                    {projectViewType === 'grid' ? 'Table View' : 'Grid View'}
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex items-center gap-2"
                  >
                    <PlusCircle size={16} />
                    Add Project
                  </Button>
                </div>
              </div>
              <ProjectsListSection 
                projects={projects} 
                onAddProject={handleAddProject}
                viewType={projectViewType}
              />
            </TabsContent>
            
            <TabsContent value="tasks">
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Tasks Management</CardTitle>
                </CardHeader>
                <CardContent className="py-12 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-light-themeprimarylight-blue rounded-full flex items-center justify-center text-light-themeprimaryblue mb-4">
                    <ListChecks size={24} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Tasks Coming Soon</h3>
                  <p className="text-blackblack-60 mb-6 max-w-md text-center">
                    The tasks management section allows you to create, assign, and track tasks across all your projects.
                    This feature will be implemented in a future update.
                  </p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bell size={16} />
                    Get Notified When Ready
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team">
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Team Management</CardTitle>
                </CardHeader>
                <CardContent className="py-12 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-light-themesecondarylight-purple rounded-full flex items-center justify-center text-light-themesecondarypurple mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Team Management Coming Soon</h3>
                  <p className="text-blackblack-60 mb-6 max-w-md text-center">
                    The team management section allows you to manage team members, roles, and permissions across your projects.
                    This feature will be implemented in a future update.
                  </p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bell size={16} />
                    Get Notified When Ready
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Dashboard Settings</CardTitle>
                </CardHeader>
                <CardContent className="py-12 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-actionsuccesslight rounded-full flex items-center justify-center text-actionsuccess mb-4">
                    <Settings size={24} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Settings Coming Soon</h3>
                  <p className="text-blackblack-60 mb-6 max-w-md text-center">
                    The settings section allows you to customize your project management dashboard,
                    notification preferences, and default views. This feature will be implemented in a future update.
                  </p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bell size={16} />
                    Get Notified When Ready
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};