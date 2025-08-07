import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LectureClass, Lecture } from '@/types/lecture';
import { ChevronDown, ChevronUp, Play, Clock } from 'lucide-react';
import { VideoPlayer } from '@/components/ui/video-player';

interface ClassSectionProps {
  classData: LectureClass;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ClassSection: React.FC<ClassSectionProps> = ({ 
  classData, 
  isExpanded, 
  onToggle 
}) => {
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);

  return (
    <div className="space-y-4">
      <Card className="border-border/50 bg-gradient-subtle shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl text-primary">{classData.name}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {classData.lectures.length} محاضرة
                  </Badge>
                </div>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="text-muted-foreground hover:text-primary"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </Button>
          </div>
        </CardHeader>
        
        {isExpanded && (
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {classData.lectures.map((lecture, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:scale-102 cursor-pointer border-border/30"
                  onClick={() => setSelectedLecture(lecture)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <Play className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                          {lecture.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {lecture.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        )}
      </Card>

      {/* Video Player Modal */}
      {selectedLecture && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">{selectedLecture.title}</h2>
              <Button
                variant="ghost"
                onClick={() => setSelectedLecture(null)}
                className="text-white hover:bg-white/20"
              >
                ✕
              </Button>
            </div>
            <VideoPlayer
              src={selectedLecture.url}
              title={selectedLecture.title}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};