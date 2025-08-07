import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageSwitchProps {
  language: 'ar' | 'en';
  onLanguageChange: (lang: 'ar' | 'en') => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ 
  language, 
  onLanguageChange 
}) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex rounded-lg bg-muted p-1">
        <Button
          variant={language === 'ar' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('ar')}
          className="text-xs"
        >
          العربية
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('en')}
          className="text-xs"
        >
          English
        </Button>
      </div>
    </div>
  );
};