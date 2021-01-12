## Run app

Clone this repository <br>
Run "npm init" to download depencies <br>
Run "npm run dev" to run the server <br>

## Database structure

### Current database structure

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/currentDataBaseStructure.PNG?raw=true" width=700px>

### Future database structure

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/dataBaseFuture.PNG?raw=true" width=700px>

## SQL realization

### All tables

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/sqlSHOWTABLES.PNG?raw=true" width=700px>

### Classroom table

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/sqlSELECTCLASSROOM.PNG?raw=true" width=700px>

### Lesson table
<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/sqlSELECTLESSON.PNG?raw=true" width=700px>

### Teacher table

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/sqlSELECTTEACHER.PNG?raw=true" width=700px>

### Required method getTargetMathTeacher in SQL

SELECT t.idTeacher, t.name, t.surname, t.sex, t.birthDate, t.canTeachSubjects, t.yearsExperience, t.workedInUniversities FROM teacher t INNER JOIN lesson l ON l.idTeacher = t.idTeacher INNER JOIN classroom c ON l.idClassroom = c.idClassroom WHERE t.canTeachSubjects = 'Math'
            AND t.yearsExperience > 10
            AND l.dayOfTheWeek = 'Thursday'
            AND l.startTime BETWEEN '08:30:00' AND '14:30:00' 
            AND l.endTime BETWEEN '08:30:00' AND '14:30:00' 
            AND c.numberOfClassroom = '100'
        GROUP BY t.idTeacher LIMIT 5


<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/sqlGetAllMathTeachers.PNG?raw=true" width=700px>

## Node.js results

### CRUD Operations.AddTeacher

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/newTeacherAdded.PNG?raw=true" width=700px>

### CRUD Operations.UpdateTeacher

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/updateTeacher.PNG?raw=true" width=700px>

### CRUD Operations.DeleteTeacher

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/TeacherDelete.PNG?raw=true" width=700px>

### Main page

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/getIndex.PNG?raw=true" width=700px>

### getAllTeachers

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/getAllTeachers.PNG?raw=true" width=700px>

### getTeacher by ID

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/getTeacher.PNG?raw=true" width=700px>

### finalRequest by default

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/getTargetMathTeacher.PNG?raw=true" width=700px>

### finalRequest by queries

<img src="https://github.com/RoffyMonsta/chatbotTS/blob/master/img/getTargetMathTeacher_with_query.PNG?raw=true" width=700px>

