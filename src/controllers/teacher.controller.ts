import {Request, Response} from 'express';
import {Teacher} from '../models/Teacher';
import connect from '../db';

const teacherSql = 'SELECT t.idTeacher, t.name, t.surname, t.sex, t.birthDate, t.canTeachSubjects, t.yearsExperience, t.workedInUniversities FROM teacher t';

export async function getAllTeachers(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const teachers = await conn.query(`${teacherSql} ORDER BY t.idTeacher`);
    return res.json(teachers[0] || []);
}

export async function getTeacher(req: Request, res: Response): Promise<Response> {
    const idTeacher = req.params.teacherId;
    const conn = await connect();
    const teacher = await conn.query(`${teacherSql} WHERE t.idTeacher = ? ORDER BY t.surname`, [idTeacher]);
    return res.json(teacher[0]);
}

export async function createTeacher(req: Request, res: Response): Promise<Response> {
    const newTeacher: Teacher = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO teacher SET ?', [newTeacher]);
    return res.json({
        message: `Teacher ${newTeacher.name} ${newTeacher.surname} added`,
        body: {
            newTeacher,
        },
    });
}

export async function deleteTeacher(req: Request, res: Response): Promise<Response> {
    const idTeacher = req.params.idTeacher;
    const conn = await connect();
    await conn.query('DELETE FROM teacher WHERE idTeacher = ?', [idTeacher]);

    return res.json({
        message: 'Row is deleted',
    });
}

export async function updateTeacher(req: Request, res: Response): Promise<Response> {
    const idTeacher = req.params.idTeacher;
    const updatedTeacher: Teacher = req.body;
    const conn = await connect();
    await conn.query('UPDATE teacher SET ? WHERE idTeacher = ?', [updatedTeacher, idTeacher]);

    return res.json({
        message: 'Row is updated',
        body: {
            updatedTeacher,
        },
    });
}


export async function getTargetMathTeacher(req: Request, res: Response): Promise<Response> {
    const canTeachSubjects = req.query.canTeachSubjects || 'Math';
    const yearsExperience = req.query.yearsExperience || 10;
    const dayOfTheWeek = req.query.dayOfTheWeek || 'Thursday';
    const startTime = req.query.startTime || '08:30:00';
    const endTime = req.query.endTime || '14:30:00';
    const numberOfClassroom = req.query.numberOfClassroom || 100;
    const limit = req.query.limit || 5;
    const conn = await connect();
    const mathTeacher = await conn.query(
        `${teacherSql}
        INNER JOIN lesson l ON l.idTeacher = t.idTeacher
        INNER JOIN classroom c ON l.idClassroom = c.idClassroom
        WHERE t.canTeachSubjects = '${canTeachSubjects}'
            AND t.yearsExperience > ${yearsExperience}
            AND l.dayOfTheWeek = '${dayOfTheWeek}'
            AND l.startTime BETWEEN '${startTime}' AND '${endTime}' 
            AND l.endTime BETWEEN '${startTime}' AND '${endTime}' 
            AND c.numberOfClassroom = '${numberOfClassroom}'
        GROUP BY t.idTeacher LIMIT ${limit}`,
    );

    return res.json(mathTeacher[0]);
}