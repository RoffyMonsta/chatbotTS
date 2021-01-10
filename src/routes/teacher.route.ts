import { Router } from 'express';
import {
  createTeacher,
  deleteTeacher,
  getTargetMathTeacher,
  getTeacher,
  getAllTeachers,
  updateTeacher,
} from '../controllers/teacher.controller';

const router = Router();

router.route('/')
  .get(getAllTeachers)
  .post(createTeacher);

router.route('/mathTeachers')
  .get(getTargetMathTeacher);

router.route('/:teacherId')
  .get(getTeacher)
  .delete(deleteTeacher)
  .put(updateTeacher);

export default router;