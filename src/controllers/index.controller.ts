import { Request, Response } from 'express';

export default function indexMain(req: Request, res: Response): Response {
  return res.json('ChatBot test');
}