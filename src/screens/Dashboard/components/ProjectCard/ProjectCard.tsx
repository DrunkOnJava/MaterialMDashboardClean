import React from 'react';
import { Card, CardContent, CardFooter } from '../../../../components/ui/card';
import { Avatar, AvatarFallback } from '../../../../components/ui/avatar';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { Progress } from '../../../../components/ui/progress';
import { Calendar, CheckSquare, Clock, ExternalLink } from 'lucide-react';

export interface ProjectCardProps {
  project: {
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
  };
  onView?: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onView }) => {
  // Calculate days left until due date
  const calculateDaysLeft = () => {
    const today = new Date();
    const dueDate = new Date(project.dueDate);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysLeft = calculateDaysLeft();
  
  // Get status badge color
  const getStatusColor = () => {
    switch (project.status) {
      case 'In Progress':
        return 'bg-actionsuccesslight text-actionsuccess';
      case 'Planning':
        return 'bg-light-themeprimarylight-blue text-light-themeprimaryblue';
      case 'On Hold':
        return 'bg-actionwarninglight text-actionwarning';
      case 'Completed':
        return 'bg-light-themesecondarylight-purple text-light-themesecondarypurple';
      default:
        return 'bg-surfaceslightgray-10 text-blackblack-60';
    }
  };

  const handleView = () => {
    if (onView) {
      onView(project.id);
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="h-2 bg-light-themeprimaryblue" />
      <CardContent className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-medium text-lg text-blackblack-100">{project.name}</h3>
          <Badge className={`${getStatusColor()} font-normal`}>
            {project.status}
          </Badge>
        </div>
        
        <p className="text-blackblack-60 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-blackblack-60">Progress</span>
            <span className="font-medium text-blackblack-100">{project.completion}%</span>
          </div>
          <Progress value={project.completion} className="h-1.5" />
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-1.5">
            <CheckSquare size={14} className="text-blackblack-60" />
            <span className="text-xs text-blackblack-80">
              {project.tasks.completed}/{project.tasks.total} Tasks
            </span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-blackblack-60" />
            <span className="text-xs text-blackblack-80">
              {project.dueDate}
            </span>
          </div>
        </div>
        
        {daysLeft > 0 && (
          <div className="flex items-center gap-2 mb-3">
            <Clock size={14} className={daysLeft < 7 ? "text-actionwarning" : "text-blackblack-60"} />
            <span className={`text-xs ${daysLeft < 7 ? "text-actionwarning font-medium" : "text-blackblack-60"}`}>
              {daysLeft} days left
            </span>
          </div>
        )}
        
        <div className="flex -space-x-2 mt-4">
          {Array.from({ length: project.members }).map((_, index) => (
            <Avatar key={index} className="h-7 w-7 border-2 border-white">
              <AvatarFallback className="bg-light-themeprimarylight-blue text-light-themeprimaryblue text-xs">
                {String.fromCharCode(65 + index)}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-5 py-3 border-t border-surfaceslightgray-10 bg-surfaceslightgray-10/30">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex items-center justify-center gap-1 text-light-themeprimaryblue hover:text-light-themeprimaryblue hover:bg-light-themeprimarylight-blue/50"
          onClick={handleView}
          asChild={!!project.path}
        >
          {project.path ? (
            <a href={project.path}>
              <ExternalLink size={14} />
              <span>View Project</span>
            </a>
          ) : (
            <>
              <ExternalLink size={14} />
              <span>View Project</span>
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;