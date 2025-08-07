import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Teacher } from '@/types/lecture';
import { BookOpen, Users, Play } from 'lucide-react';

interface TeacherCardProps {
  teacher: Teacher;
  onSelect: (teacher: Teacher) => void;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, onSelect }) => {
  const totalLectures = teacher.classes.reduce((total, classItem) => total + classItem.lectures.length, 0);
  
  return (
    <Card className="group hover:shadow-glow transition-all duration-300 hover:scale-105 bg-gradient-subtle border-border/50">
      <CardHeader className="text-center pb-4">
        <div className="relative mx-auto mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto shadow-card">
            <img 
              src={teacher.image} 
              alt={teacher.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
            <BookOpen className="w-4 h-4" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-2">{teacher.name}</h3>
        <p className="text-muted-foreground mb-4">{teacher.subject}</p>
        
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {teacher.classes.length} فصول
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Play className="w-3 h-3" />
            {totalLectures} محاضرة
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Button 
          onClick={() => onSelect(teacher)}
          className="w-full"
          variant="hero"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          عرض المحاضرات
        </Button>
      </CardContent>
    </Card>
  );
};