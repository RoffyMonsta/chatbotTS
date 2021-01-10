export interface Classroom {
    idClassroom?: number;
    capacity: Capacity;
    numberOfClassroom: string;
  }
  
  enum Capacity {
    small = '40',
    medium = '80',
    large = '150'
  }