import { 
  MoonIcon, 
  SearchIcon, 
  Menu, 
  Grid, 
  BellRing, 
  MessageSquare, 
  SunMedium 
} from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Switch } from "../../../../components/ui/switch";

export const TopBarByAnima = (): JSX.Element => {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Data for notification badges
  const notifications = {
    messages: 3,
    alerts: 5,
  };

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b border-surfaceslightgray-10">
      {/* Left side icons */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-blackblack-60">
          <Menu size={20} className="cursor-pointer hover:text-blackblack-100 transition-colors" />
          <Grid size={20} className="cursor-pointer hover:text-blackblack-100 transition-colors" />
        </div>
      </div>

      {/* Right side icons and profile */}
      <div className="flex items-center gap-6">
        {/* Action icons */}
        <div className="flex items-center gap-6">
          {/* Search icon */}
          <SearchIcon className="w-5 h-5 text-blackblack-60 cursor-pointer hover:text-blackblack-100 transition-colors" />

          {/* Dark mode toggle */}
          <div className="flex items-center gap-2">
            <SunMedium size={18} className={`${isDarkMode ? 'text-blackblack-40' : 'text-actionwarning'}`} />
            <Switch 
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              className="data-[state=checked]:bg-light-themesecondarypurple"
            />
            <MoonIcon size={18} className={`${isDarkMode ? 'text-light-themesecondarypurple' : 'text-blackblack-40'}`} />
          </div>

          {/* Notifications icon with badge */}
          <div className="relative cursor-pointer">
            <BellRing size={20} className="text-blackblack-60 hover:text-blackblack-100 transition-colors" />
            {notifications.messages > 0 && (
              <Badge className="absolute -top-2 -right-2 w-4 h-4 p-0 flex items-center justify-center bg-light-themeprimaryblue text-blackwhite text-xs rounded-full border border-white">
                {notifications.messages}
              </Badge>
            )}
          </div>

          {/* Messages icon with badge */}
          <div className="relative cursor-pointer">
            <MessageSquare size={20} className="text-blackblack-60 hover:text-blackblack-100 transition-colors" />
            {notifications.alerts > 0 && (
              <Badge className="absolute -top-2 -right-2 w-4 h-4 p-0 flex items-center justify-center bg-actionwarning text-blackwhite text-xs rounded-full border border-white">
                {notifications.alerts}
              </Badge>
            )}
          </div>
        </div>

        {/* User profile avatar */}
        <Avatar className="w-9 h-9 rounded-full cursor-pointer border-2 border-white shadow-sm">
          <AvatarImage src="/user.png" alt="User profile" className="object-cover" />
          <AvatarFallback className="bg-light-themeprimarylight-blue text-light-themeprimaryblue">
            JD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
