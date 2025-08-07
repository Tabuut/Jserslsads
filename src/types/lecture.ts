export interface Lecture {
  title: string;
  description: string;
  url: string;
}

export interface LectureClass {
  name: string;
  lectures: Lecture[];
}

export interface Teacher {
  id: number;
  name: string;
  subject: string;
  image: string;
  classes: LectureClass[];
}

export interface LectureData {
  teachers: Teacher[];
}