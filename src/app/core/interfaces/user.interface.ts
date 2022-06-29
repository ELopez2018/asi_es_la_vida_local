export interface User {
  id?: number;
  is_juristic?: number;
  role_id?: number;
  name?: string;
  email?: string;
  email_verified_at?: string;
  phone?: string;
  company?: string;
  job?: string;
  fb_id?: string;
  google_id?: string;
  apple_id?: string;
  gender?: string;
  birthday?: string;
  age_range?: number;
  image?: string;
  rut?: string;
  representative_id?: string;
  chamber_commerce?: string;
  login_type?: number;
  status?: number;
  created_at?: string;
  updated_at?: string;
  last_name?: string;
  online?: number;
  nit?: string;
  cc?: string;
  terms_conditions?: string;
  token?: Token;
}

interface Token {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}
