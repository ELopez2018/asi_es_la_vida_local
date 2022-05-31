import { UserModel } from './user.model';

export interface PersonalDataModel extends UserModel {
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
