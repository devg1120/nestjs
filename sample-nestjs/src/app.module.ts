
import { Inject, Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as RedisStore from 'connect-redis';
import * as session from 'express-session';
import * as passport from 'passport';
import { RedisClient } from 'redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import * as path from 'path';
import { AuthModule } from './modules/auth/auth.module';
import { RedisModule, REDIS } from './modules/redis';

@Module({
  controllers: [AppController],
  providers: [AppService, Logger],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      //playground: true,
      autoSchemaFile: path.join(process.cwd(), "src/schema.gql"),
      context: ({ req, res }) => ({ req, res }),
      sortSchema: true,
     
      cors: {
        //origin: ['http://localhost:3000'], // TODO: 環境変数経由で呼ぶようにしたい
        origin: "*", // TODO: 環境変数経由で呼ぶようにしたい
        credentials: true,
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
        methods: "*"
      },

  playground: {
    settings: {
      "request.credentials": "include"
    }
  }
     
    }),
    PostsModule,
    UsersModule,
    RedisModule,
    AuthModule,
  ],
})
export class AppModule implements NestModule {
  constructor(@Inject(REDIS) private readonly redis: RedisClient) { }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
		// npmjs.com/package/connect-redis
          store: new (RedisStore(session))({ client: this.redis, logErrors: true , disableTouch: false}),
          saveUninitialized: false,
          secret: 'secret',
          resave: false,
          cookie: {
            path: '/', 
            sameSite: 'lax',
            httpOnly: true,
            maxAge: 60000  * 10,
            secure: false,
            //domain: "localhost" // TODO: 環境変数経由で呼ぶようにしたい
            //domain: "*" // TODO: 環境変数経由で呼ぶようにしたい
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
