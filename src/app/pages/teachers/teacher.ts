export interface User {
  id?:       string;
  docId?:       string;
  name?:     string;
  username?: string;
  password?: string;
  phone?:    string;
  email?:    string;
  address?:  string;
  gender?:  string;
  last_login?: string;
  type?:     string;
  status?:   string;

  createAt?: string;
  updateAt?: string;
}
