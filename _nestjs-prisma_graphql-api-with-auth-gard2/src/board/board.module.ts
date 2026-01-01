import { Module } from '@nestjs/common';
import { BoardController } from './board.controller.js';
import { BoardResolver } from './board.resolver.js';
import { BoardService } from './board.service.js';
import { PostService } from './post.service.js';
import { PrismaService } from '../prisma.service.js';

import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({

  imports: [ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

  ],

  controllers: [BoardController],
  providers: [BoardService, PostService, PrismaService, BoardResolver],
})
export class BoardModule {}

