import { Module , NestMiddleware , MiddlewareConsumer} from '@nestjs/common';
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

import session from 'express-session';


@Module({

  imports: [ConfigModule.forRoot(),

    PassportModule.register({ session: true }),
/*
    SessionModule.forRoot({
      session: {
        secret: 'keyboard cat',
        // resave: false,
        // saveUninitialized: false,
      },
    }),
   */
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      //context: ({ req  }) => ({ req }), 
      context: ({ req, res }) => ({ req, res }),


    }),
    //AuthModule,
  ],

  controllers: [BoardController],
  providers: [BoardService, PostService, PrismaService, BoardResolver],
})
export class BoardModule {}

