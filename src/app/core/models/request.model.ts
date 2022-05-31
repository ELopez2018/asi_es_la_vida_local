import { RequestServiceHistory } from "./request-service-history.model";

export interface RequestModel {
  id: number;
  user_id: number;
  request_type_id: number;
  service_type_id: number;
  request_state_id: number;
  telefono: string;
  mensaje: string;
  finalizada: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  name: string;
  email: string;
  state_descripcion: string;
  services_types_description: string;
  request_types_description: string;
  history: RequestServiceHistory[];
}
