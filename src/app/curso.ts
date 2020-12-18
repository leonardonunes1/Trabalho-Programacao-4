import { Usuario } from './usuario';

export class Curso {
  _id?: string;
  name: string;
  description: string;
  teacher?: Usuario;
  student?: Usuario[];
}