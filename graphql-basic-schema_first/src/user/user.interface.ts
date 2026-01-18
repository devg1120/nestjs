import { DateTime } from 'luxon';

export interface IUser  {
  id: number
  name: string
  email: string
  password: string
  //createdAt: Date
  //updatedAt: Date
  createdAt: DateTime
  updatedAt: DateTime
}
 
