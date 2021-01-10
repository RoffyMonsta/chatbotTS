DROP DATABASE IF EXISTS university;
CREATE DATABASE IF NOT EXISTS university;

USE university;

DROP TABLE IF EXISTS teacher;

CREATE TABLE IF NOT EXISTS teacher
(
    idTeacher                  INT                                                                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name          VARCHAR(50)                                                         NOT NULL,
    surname           VARCHAR(50)                                                         NOT NULL,
    sex              VARCHAR(6)                                                          NOT NULL,
    birthDate       DATE                                                                NOT NULL,
    canTeachSubjects      ENUM ('Math', 'English', 'Physics', 'Ukrainian', 'Biology', 'Chemistry') NOT NULL,
    yearsExperience INT(100)                                                            NOT NULL,
    workedInUniversities ENUM('LNU','LPNU','LNUVM','LNMU')                             NOT NULL
);

INSERT INTO `teacher` (`name`,`surname`,`sex`,`birthDate`,`canTeachSubjects`,`yearsExperience`,`workedInUniversities`) VALUES ("Victoria","Mckee","Female","2020-02-11 09:36:56","Biology",11,"LPNU"),("Remedios","Martinez","Male","2020-03-06 22:43:33","Chemistry",1,"LPNU"),("Stephen","Sargent","Female","2021-02-05 23:53:11","Biology",15,"LPNU"),("Abel","Roy","Male","2021-06-14 14:29:21","Physics",8,"LNU"),("Edward","Velazquez","Male","2020-11-26 05:53:40","English",9,"LPNU"),("Chava","Gardner","Female","2020-08-07 23:21:38","Biology",20,"LNMU"),("Devin","Mcmahon","Male","2020-07-27 06:11:51","Math",15,"LNMU"),("Ariana","David","Male","2020-06-13 10:20:42","Ukrainian",23,"LPNU"),("Iola","Oconnor","Male","2021-02-08 17:40:59","Math",20,"LNUVM"),("Tiger","Crawford","Male","2020-08-31 01:29:52","English",14,"LPNU"),("Zeph","Dudley","Female","2020-05-13 15:04:18","Biology",17,"LNU"),("Shaine","Mclean","Female","2021-10-12 12:15:58","Biology",7,"LPNU"),("Rebecca","Hunter","Male","2021-11-06 02:56:44","Ukrainian",21,"LNMU"),("Brenna","Carroll","Male","2021-11-14 05:40:19","Chemistry",15,"LNUVM"),("Brock","Schultz","Female","2021-12-19 06:45:01","Physics",21,"LPNU"),("Orlando","Payne","Male","2021-12-13 02:56:54","Math",24,"LPNU"),("Lacy","Kerr","Female","2021-05-20 17:13:27","Math",27,"LPNU"),("Gwendolyn","Garcia","Male","2020-08-12 05:30:33","Chemistry",11,"LPNU"),("Ciaran","Erickson","Male","2020-02-12 14:48:59","Physics",25,"LPNU"),("Marah","Brewer","Male","2020-10-18 22:48:02","English",15,"LNU"); 


DESCRIBE teacher;

DROP TABLE IF EXISTS classroom;

CREATE TABLE IF NOT EXISTS classroom
(
    idClassroom       INT                                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    capacity ENUM ('40', '80', '150') NOT NULL,
    numberOfClassroom     VARCHAR(3)                          NOT NULL
);

DESCRIBE classroom;

INSERT INTO classroom (capacity, numberOfClassroom)
VALUES ('40', '100'),
       ('150', '1'),
       ('80', '111'),
       ('40', '125'),
       ('150', '14'),
       ('150', '12');

DROP TABLE IF EXISTS lesson;

CREATE TABLE IF NOT EXISTS lesson
(
    idLesson           INT                                                                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idClassroom INT,
    idTeacher   INT,
    subjectName      ENUM ('Math', 'English', 'Physics', 'Ukrainian', 'Biology', 'Chemistry') NOT NULL,
    dayOfTheWeek  ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'),
    startTime    TIME                                                                NOT NULL,
    endTime     TIME                                                                NOT NULL,
    CONSTRAINT classroomFK
        FOREIGN KEY (idClassroom) REFERENCES classroom (idClassroom),
    CONSTRAINT teacherFK
        FOREIGN KEY (idTeacher) REFERENCES teacher (idTeacher)
);

DESCRIBE lesson;

INSERT INTO `lesson` (`idClassroom`,`idTeacher`,`subjectName`,`dayOfTheWeek`,`startTime`,`endTime`) VALUES (4,17,"Ukrainian","Friday","08:30:00","10:20:00"),(5,9,"Chemistry","Friday",6,27),(5,10,"Math","Thursday","12:35:00","13:55:00"),(1,1,"Chemistry","Tuesday","08:30:00","10:20:00"),(5,9,"Math","Tuesday","12:35:00","13:55:00"),(5,9,"Chemistry","Wednesday","12:35:00","13:55:00"),(2,8,"English","Monday","08:30:00","10:20:00"),(3,12,"Math","Wednesday","10:35:00","12:10:00"),(3,4,"Chemistry","Tuesday","10:35:00","12:10:00"),(3,20,"Ukrainian","Tuesday","12:35:00","13:55:00"),(1,3,"Ukrainian","Tuesday","08:30:00","10:20:00"),(3,12,"English","Thursday","12:35:00","13:55:00"),(2,19,"Chemistry","Tuesday","10:35:00","12:10:00"),(2,1,"Math","Friday","12:35:00","13:55:00"),(5,18,"Physics","Wednesday","08:30:00","10:20:00"),(5,11,"English","Wednesday","12:35:00","13:55:00"),(2,20,"Ukrainian","Monday","12:35:00","13:55:00"),(4,8,"Physics","Tuesday","08:30:00","10:20:00"),(5,1,"Physics","Thursday","10:35:00","12:10:00"),(3,20,"Chemistry","Monday","08:30:00","10:20:00");