import { User } from '../interfaces/user.interface';

export interface PersonalDataModel extends User {
  din: string;
  pnombre: string;
  snombre: string;
  apellidop: string;
  apellidom: string;
  celular: string;
  telefonos: string;
  pais: string;
  departamento: string;
  ciudad: string;
  barrio: string;
  direccion: string;
  fechanacimiento: Date;
}
