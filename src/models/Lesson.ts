export interface Lesson {
    idLesson?: string;
    idClassroom: string;
    idTeacher: string;
    subjectName: subjectName;
    dayOfTheWeek: dayOfTheWeek;
    startTime: string;
    endTime: string;
  }
  
  export enum subjectName {
    Math = 'Math',
    English = 'English',
    Physics = 'Physics',
    Ukrainian = 'Ukrainian',
    Biology = 'Biology',
    Chemitsry = 'Chemitsry'
  }
  
  enum dayOfTheWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday'
  }