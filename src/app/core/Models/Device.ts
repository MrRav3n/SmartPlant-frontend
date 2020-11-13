import { Plant } from './Plant';

export class Device {
  id: number;
  name: string;
  UserId: number;
  SecretKey: number;
  plants: [Plant];
}
