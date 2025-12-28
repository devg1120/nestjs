import { Resolver, Query } from '@nestjs/graphql';
//import { User } from './user.model';
import { User } from '../graphql.js';
import { IQuery } from '../graphql.js';

@Resolver(() => User)
export class UserResolver extends IQuery{
  @Query(() => [User])
  getUsers(): User[] {
    return [
      { id: 1, name: 'Messi', email: 'Messi@example.com' },
      { id: 2, name: '大谷', email: 'Ohtai@example.com' },
    ];
  }
}


