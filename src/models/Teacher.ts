import { subjectName } from './Lesson';

export interface Teacher {
  idTeacher?: number;
  name: string;
  surname: string;
  sex: string;
  birthDate: string;
  canTeachSubjects: subjectName;
  yearsExperience: number;
  workedInUniversities: universities;
}

enum universities {
    LNU = 'LNU',
    LPNU = 'LPNU',
    LNUVM = 'LNUVM',
    LNMU = 'LNMU'
}