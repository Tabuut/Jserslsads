import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TeacherCard } from '@/components/TeacherCard';
import { ClassSection } from '@/components/ClassSection';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import { lectureData } from '@/data/lectureData';
import { Teacher } from '@/types/lecture';
import { BookOpen, ArrowRight, GraduationCap, Users, Play } from 'lucide-react';

const Index = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [expandedClasses, setExpandedClasses] = useState<Set<number>>(new Set());
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleClassExpansion = (index: number) => {
    const newExpanded = new Set(expandedClasses);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedClasses(newExpanded);
  };

  const totalLectures = lectureData.reduce((total, teacher) => 
    total + teacher.classes.reduce((classTotal, classItem) => 
      classTotal + classItem.lectures.length, 0), 0);

  const totalClasses = lectureData.reduce((total, teacher) => 
    total + teacher.classes.length, 0);

  if (selectedTeacher) {
    return (
      <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Header */}
        <div className="border-b border-border bg-gradient-subtle">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedTeacher(null)}
                  className="flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
                </Button>
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-card">
                  <img 
                    src={selectedTeacher.image} 
                    alt={selectedTeacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">{selectedTeacher.name}</h1>
                  <p className="text-muted-foreground">{selectedTeacher.subject}</p>
                </div>
              </div>
              <LanguageSwitch language={language} onLanguageChange={setLanguage} />
            </div>
          </div>
        </div>

        {/* Classes */}
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            {selectedTeacher.classes.map((classData, index) => (
              <ClassSection
                key={index}
                classData={classData}
                isExpanded={expandedClasses.has(index)}
                onToggle={() => toggleClassExpansion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center shadow-glow">
                <GraduationCap className="w-10 h-10" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              {language === 'ar' 
                ? 'منصة جسر التعلم للغة العربية والإنجليزية' 
                : 'LearnBridge Arabic-English Learning Platform'}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'اكتشف عالم التعلم مع أفضل الأساتذة والمحاضرات التفاعلية'
                : 'Discover the world of learning with the best teachers and interactive lectures'}
            </p>
            
            <div className="flex justify-center mb-12">
              <LanguageSwitch language={language} onLanguageChange={setLanguage} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{lectureData.length}</div>
                <div className="text-primary-foreground/70">
                  {language === 'ar' ? 'مدرس' : 'Teachers'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{totalClasses}</div>
                <div className="text-primary-foreground/70">
                  {language === 'ar' ? 'فصل دراسي' : 'Classes'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{totalLectures}</div>
                <div className="text-primary-foreground/70">
                  {language === 'ar' ? 'محاضرة' : 'Lectures'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teachers Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {language === 'ar' ? 'اختر مدرسك' : 'Choose Your Teacher'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تصفح مجموعة متنوعة من الأساتذة المتخصصين واختر الأنسب لاحتياجاتك التعليمية'
              : 'Browse a diverse collection of specialized teachers and choose the best fit for your educational needs'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lectureData.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              onSelect={setSelectedTeacher}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {language === 'ar' ? 'لماذا جسر التعلم؟' : 'Why LearnBridge?'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>
                  {language === 'ar' ? 'محتوى تعليمي متميز' : 'Premium Educational Content'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'محاضرات عالية الجودة من أفضل الأساتذة المتخصصين'
                    : 'High-quality lectures from the best specialized teachers'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle>
                  {language === 'ar' ? 'دعم متعدد اللغات' : 'Multilingual Support'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'منصة تدعم التعلم باللغتين العربية والإنجليزية'
                    : 'Platform supporting learning in both Arabic and English'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>
                  {language === 'ar' ? 'تجربة تفاعلية' : 'Interactive Experience'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'مشغل فيديو متقدم مع أدوات تحكم سهلة الاستخدام'
                    : 'Advanced video player with easy-to-use controls'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
