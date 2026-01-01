//import { Resolver, Query } from '@nestjs/graphql';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PrismaService } from '../prisma.service.js';
import { Board } from './board.model.js';

@Resolver(() => Board)
export class BoardResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Board])
  async boards() {
    return this.prisma.board.findMany();
  }

  @Mutation(() => Board)
  async createBoard(
    @Args('name') name: string,
    @Args('email') email: string,
  ) {
    return this.prisma.board.create({ data: {  name , email } });
  }
/*
  @Query(() => [Board])
  getBoards(): Board[] {
    return [
      { id: 1, name: 'Messi', email: 'Messi@example.com' },
      { id: 2, name: '大谷', email: 'Ohtai@example.com' },
    ];
  }
*/

}


