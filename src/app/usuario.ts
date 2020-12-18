import { Curso } from './curso';

export class Usuario {
  _id?: string;
  role: string;
  name: string;
  avatar?: string;
  username: string;
  password?: string;
  email: string;
  courses?: Curso[];
}