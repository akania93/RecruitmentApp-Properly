import { Observable } from 'rxjs';
import { Settings } from './settings';

export interface User {
  id: number;
  roles: Array<RolesEnum>;
  firstName: string;
  lastName: string;
  name?: string;
  type: 'person' | 'firm';
  nip?: string;
  pesel?: string;
  email: string;
  phone?: string;
  city?: string;
  street?: string;
  zip?: string;
  houseNo?: string;
  apartmentNo?: string;
  country?: string;
  language?: string;
  bic?: string;
  bankAccount?: string;
  picture?: string;
  settings: Settings;
}

export interface Roles {
  id: number;
  name: string;
}

// nie używane - przemyśleć
export enum RolesEnum {
  Admin = 'admin',
  User = 'user',
  Partner = 'partner',
}

export abstract class UserData {
  abstract getCurrentUser(): Observable<User>;

  abstract list(pageNumber: number, pageSize: number): Observable<Array<User>>;

  abstract get(id: number): Observable<User>;

  abstract update(user: User): Observable<User>;

  abstract updateCurrent(user: User): Observable<User>;

  abstract create(user: User): Observable<User>;

  abstract delete(id: number): Observable<boolean>;
}
