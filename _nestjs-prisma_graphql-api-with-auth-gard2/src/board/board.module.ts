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

import { PassportModule } from '@nestjs/passport';
import { SessionModule } from 'nestjs-session';


@Module({

  imports: [ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

      
  playground: {
    settings: {
      "request.credentials": "include", // Otherwise cookies won't be sent
    }
  },


 // Source - https://stackoverflow.com/a
// Posted by Raj Gohil, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-02, License - CC BY-SA 4.0


    }),

/*
    PassportModule.register({ session: true }), // セッションを有効化
    SessionModule.forRoot({ // セッションミドルウェアの設定例 (http-server用)
      session: {
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false,
      },
      // GraphQLの場合は異なる設定が必要な場合がある
    }),
*/
  ],

  controllers: [BoardController],
  providers: [BoardService, PostService, PrismaService, BoardResolver],
})
export class BoardModule {}

