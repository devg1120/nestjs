//import { Resolver, Query } from '@nestjs/graphql';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PrismaService } from '../prisma.service.js';
import { User } from './user.model.js';

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [User])
  async users() {
    return this.prisma.user.findMany();
  }

  @Mutation(() => User)
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
  ) {
    return this.prisma.user.create({ data: {  name, email } });
  }
/*
  @Query(() => [User])
  getUsers(): User[] {
    return [
      { id: 1, name: 'Messi', email: 'Messi@example.com' },
      { id: 2, name: '大谷', email: 'Ohtai@example.com' },
    ];
  }
*/

}


