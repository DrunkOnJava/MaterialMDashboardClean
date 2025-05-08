import { 
  ChevronDownIcon, 
  LayoutDashboard, 
  FolderKanban, 
  Calendar, 
  CheckSquare, 
  FileText, 
  BarChart3, 
  Settings, 
  Users, 
  Home, 
  Briefcase,
  Mail,
  Bell,
  MessageSquare,
  Bookmark,
  FileBox,
  PieChart,
  Library,
  Layers,
  User,
  PlusCircle
} from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";
import { Link, useLocation } from "react-router-dom";

// Define navigation item types with Lucide icon component
interface NavItem {
  icon: React.ReactNode;
  label: string;
  path?: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  submenuItems?: SubNavItem[];
}

interface SubNavItem {
  label: string;
  path: string;
}

// Define navigation sections with Lucide icons
const dashboardItems: NavItem[] = [
  { icon: <LayoutDashboard size={18} />, label: "Dashboard", path: "/", isActive: true },
  { icon: <FolderKanban size={18} />, label: "Projects", path: "/projects" },
  { icon: <Calendar size={18} />, label: "Calendar", path: "/calendar" },
  { icon: <CheckSquare size={18} />, label: "Tasks", path: "/tasks" },
];

// Project items
const projectItems: NavItem[] = [
  { icon: <Briefcase size={18} />, label: "Blue Mountain Wicks", path: "/blue-mountain-wicks" },
  // More projects can be added here in the future
];

// Tools items
const toolItems: NavItem[] = [
  { icon: <FileText size={18} />, label: "Notes", path: "/notes" },
  { icon: <FileBox size={18} />, label: "Documents", path: "/documents" },
  { icon: <BarChart3 size={18} />, label: "Reports", path: "/reports" },
  { icon: <PieChart size={18} />, label: "Analytics", path: "/analytics" },
];

// Consolidated UI Components with Lucide icons
const appItems: NavItem[] = [
  { 
    icon: <Layers size={18} />, 
    label: "UI Components", 
    hasSubmenu: true,
    submenuItems: [
      // Components submenu
      { label: "Cards", path: "/components/cards" },
      { label: "Alerts", path: "/components/alerts" },
      { label: "Modals", path: "/components/modals" },
      { label: "Tabs", path: "/components/tabs" },
      { label: "Accordion", path: "/components/accordion" },
      { label: "Tables", path: "/components/tables" },
      { label: "Avatars", path: "/components/avatars" },
      { label: "Progress", path: "/components/progress" },
      { label: "Pagination", path: "/components/pagination" },
      // Buttons submenu
      { label: "Primary Buttons", path: "/buttons/primary" },
      { label: "Secondary Buttons", path: "/buttons/secondary" },
      { label: "Outline Buttons", path: "/buttons/outline" },
      { label: "Ghost Buttons", path: "/buttons/ghost" },
      { label: "Icon Buttons", path: "/buttons/icon" },
      { label: "Success Buttons", path: "/buttons/success" },
      { label: "Warning Buttons", path: "/buttons/warning" },
      { label: "Danger Buttons", path: "/buttons/danger" },
      { label: "Link Buttons", path: "/buttons/link" },
      { label: "Loading Buttons", path: "/buttons/loading" },
      { label: "Grouped Buttons", path: "/buttons/grouped" },
      // Forms submenu
      { label: "Input Fields", path: "/forms/input-fields" },
      { label: "Select Fields", path: "/forms/select-fields" },
      { label: "Checkbox & Radio", path: "/forms/checkbox-radio" },
      { label: "Form Validation", path: "/forms/validation" },
      // Charts submenu
      { label: "Bar Charts", path: "/charts/bar-charts" },
      { label: "Line Charts", path: "/charts/line-charts" },
      { label: "Pie Charts", path: "/charts/pie-charts" },
      { label: "Area Charts", path: "/charts/area-charts" },
      { label: "Scatter Charts", path: "/charts/scatter-charts" },
      // UI submenu
      { label: "Typography", path: "/ui/typography" },
      { label: "Colors", path: "/ui/colors" },
      { label: "Icons", path: "/ui/icons" },
      { label: "Grid System", path: "/ui/grid-system" },
    ]
  },
  { 
    icon: <Library size={18} />, 
    label: "Example Pages", 
    hasSubmenu: true,
    submenuItems: [
      { label: "User Profile", path: "/examples/user-profile" },
      { label: "Calendar", path: "/examples/calendar" },
      { label: "Timeline", path: "/examples/timeline" },
      { label: "File Upload", path: "/examples/file-upload" },
      { label: "Notifications", path: "/examples/notifications" },
    ]
  },
];

// Define icon sidebar items with Lucide icons
const iconSidebarItems = [
  { icon: <Home size={20} />, isActive: true },
  { icon: <Mail size={20} /> },
  { icon: <Bell size={20} /> },
  { icon: <MessageSquare size={20} /> },
];

const iconSidebarItems2 = [
  { icon: <BarChart3 size={20} /> },
  { icon: <Settings size={20} /> },
  { icon: <FileText size={20} /> },
  { icon: <Users size={20} /> },
  { icon: <Bookmark size={20} /> },
  { icon: <User size={20} /> },
];

export const SidebarByAnima = (): JSX.Element => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["UI Components", "Example Pages"]); // Default expand menus

  const toggleSubmenu = (label: string) => {
    setExpandedMenus(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label) 
        : [...prev, label]
    );
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex h-full bg-blackwhite">
      {/* Icon sidebar */}
      <div className="flex flex-col w-20 items-center px-3 py-0 border-r border-[#e4ebf0]">
        {/* Logo section */}
        <div className="flex flex-col items-center justify-center gap-2.5 py-[30px] w-full border-b border-dashed border-[#e4ebf0]">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0961E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#0961E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#0961E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Navigation icons */}
        <div className="flex flex-col items-start">
          {/* First icon group */}
          <div className="gap-1 py-3 border-b-2 border-dashed border-[#e4ebf0] inline-flex flex-col items-start">
            {iconSidebarItems.map((item, index) => (
              <div
                key={index}
                className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors 
                  ${item.isActive 
                    ? "bg-light-themeprimarylight-blue text-light-themeprimaryblue" 
                    : "text-blackblack-60 hover:bg-surfaceslightgray-10"
                  }`}
              >
                {item.icon}
              </div>
            ))}
          </div>

          {/* Second icon group */}
          <div className="gap-1 py-3 border-b-2 border-dashed border-[#e4ebf0] inline-flex flex-col items-start">
            {iconSidebarItems2.map((item, index) => (
              <div
                key={index}
                className="w-12 h-12 flex items-center justify-center rounded-full text-blackblack-60 hover:bg-surfaceslightgray-10 transition-colors"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* User avatar */}
        <div className="flex items-center justify-center py-[30px] w-full mt-auto">
          <Avatar className="w-[35px] h-[35px]">
            <AvatarImage src="/user.png" alt="User" />
          </Avatar>
        </div>
      </div>

      {/* Main sidebar with text */}
      <ScrollArea className="flex-1 h-full bg-blackwhite shadow-[1px_0px_10px_#0000000d]">
        <div className="flex flex-col items-start gap-3.5 px-4 py-[30px]">
          {/* Core Navigation */}
          <div className="flex flex-col items-start w-full">
            <div className="flex items-start gap-2.5 px-0 py-2 w-full">
              <div className="w-fit mt-[-1.00px] font-normal text-blackblack-100 text-[15px] tracking-[-0.30px] leading-[21px]">
                Main Navigation
              </div>
            </div>

            {dashboardItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path || "#"}
                className={`flex items-center gap-2.5 px-4 py-3 w-full transition-colors ${
                  isActive(item.path || "") 
                    ? "bg-light-themeprimarylight-blue rounded-[30px]"
                    : "hover:bg-surfaceslightgray-10"
                }`}
              >
                <div className={`w-5 h-5 flex items-center justify-center ${
                  isActive(item.path || "") 
                    ? "text-light-themeprimaryblue"
                    : "text-blackblack-60"
                }`}>
                  {item.icon}
                </div>
                <div
                  className={`flex-1 font-normal text-[15px] leading-[21px] ${
                    isActive(item.path || "") 
                      ? "text-light-themeprimaryblue"
                      : "text-blackblack-100"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          <Separator className="w-full" />

          {/* Projects section */}
          <div className="flex flex-col items-start w-full">
            <div className="flex items-start justify-between gap-2.5 px-2 py-2 w-full">
              <div className="font-normal text-blackblack-100 text-[15px] tracking-[-0.30px] leading-[21px]">
                Projects
              </div>
              <button className="text-light-themeprimaryblue hover:text-light-themeprimaryblue-dark text-sm flex items-center">
                <PlusCircle size={16} className="mr-1" /> New
              </button>
            </div>

            {projectItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path || "#"}
                className={`flex items-center gap-2.5 px-4 py-3 w-full transition-colors ${
                  isActive(item.path || "") 
                    ? "bg-light-themeprimarylight-blue rounded-[30px]"
                    : "hover:bg-surfaceslightgray-10"
                }`}
              >
                <div className={`w-5 h-5 flex items-center justify-center ${
                  isActive(item.path || "") 
                    ? "text-light-themeprimaryblue"
                    : "text-blackblack-60"
                }`}>
                  {item.icon}
                </div>
                <div
                  className={`flex-1 font-normal text-[15px] leading-[21px] ${
                    isActive(item.path || "") 
                      ? "text-light-themeprimaryblue"
                      : "text-blackblack-100"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          <Separator className="w-full" />

          {/* Tools section */}
          <div className="flex flex-col items-start w-full">
            <div className="flex items-start gap-2.5 px-0 py-2 w-full">
              <div className="font-normal text-blackblack-100 text-[15px] tracking-[-0.30px] leading-[21px]">
                Tools
              </div>
            </div>

            {toolItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path || "#"}
                className={`flex items-center gap-2.5 px-4 py-3 w-full transition-colors ${
                  isActive(item.path || "") 
                    ? "bg-light-themeprimarylight-blue rounded-[30px]"
                    : "hover:bg-surfaceslightgray-10"
                }`}
              >
                <div className={`w-5 h-5 flex items-center justify-center ${
                  isActive(item.path || "") 
                    ? "text-light-themeprimaryblue"
                    : "text-blackblack-60"
                }`}>
                  {item.icon}
                </div>
                <div
                  className={`flex-1 font-normal text-[15px] leading-[21px] ${
                    isActive(item.path || "") 
                      ? "text-light-themeprimaryblue"
                      : "text-blackblack-100"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          <Separator className="w-full" />

          {/* UI Components section */}
          <div className="flex flex-col items-start w-full">
            <div className="flex items-start gap-2.5 px-0 py-2 w-full">
              <div className="font-normal text-blackblack-100 text-[15px] tracking-[-0.30px] leading-[21px]">
                UI Components
              </div>
            </div>

            {appItems.map((item, index) => (
              <div key={index} className="w-full">
                {item.hasSubmenu ? (
                  <div className="w-full">
                    <div 
                      className="flex items-center gap-2.5 px-4 py-3 w-full cursor-pointer hover:bg-surfaceslightgray-10 transition-colors"
                      onClick={() => toggleSubmenu(item.label)}
                    >
                      <div className="w-5 h-5 flex items-center justify-center text-blackblack-60">
                        {item.icon}
                      </div>
                      <div className="flex-1 font-normal text-blackblack-100 text-[15px] leading-[21px]">
                        {item.label}
                      </div>
                      <ChevronDownIcon 
                        className={`w-5 h-5 transition-transform text-blackblack-60 ${
                          expandedMenus.includes(item.label) ? "rotate-180" : ""
                        }`} 
                      />
                    </div>
                    
                    {expandedMenus.includes(item.label) && item.submenuItems && (
                      <div className="pl-9 pb-2">
                        {item.submenuItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`flex items-center py-2 px-3 rounded-[30px] w-full transition-colors ${
                              isActive(subItem.path) 
                                ? "bg-light-themeprimarylight-blue text-light-themeprimaryblue"
                                : "text-blackblack-100 hover:bg-surfaceslightgray-10"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path || "#"}
                    className="flex items-center gap-2.5 px-4 py-3 w-full hover:bg-surfaceslightgray-10 transition-colors"
                  >
                    <div className="w-5 h-5 flex items-center justify-center text-blackblack-60">
                      {item.icon}
                    </div>
                    <div className="flex-1 font-normal text-blackblack-100 text-[15px] leading-[21px]">
                      {item.label}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};