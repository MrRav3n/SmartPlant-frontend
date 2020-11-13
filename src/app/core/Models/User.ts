import { Device } from './Device';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  devices: [Device];
  token: string;
}
