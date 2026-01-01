import { NestFactory } from '@nestjs/core';
import  session from 'express-session';
import  passport from 'passport';
import  pgSession from 'connect-pg-simple';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config'

async function bootstrap() {
  console.log("=====",process.env.DATABASE_URL);
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const pgSessionStore = pgSession(session);
  app.use(
    session({
      store: new pgSessionStore({
        // prismaで設定したDATABASE_URLを指定
        conString: process.env.DATABASE_URL,
        // テーブルが存在しなければ新規作成する
        createTableIfMissing: true,
      }),
      //secret: process.env.SECRET_KEY,
      secret: 'gusa',
      resave: false,
      saveUninitialized: false,
      // セッション情報を1h保持
      cookie: {
        maxAge: 60 * 60 * 1000,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(new ValidationPipe());
  if (process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .setTitle('CRM API Project')
      .setDescription('CRM API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs/', app, document);
    // Swaggerによるキャッシュ制御を無効にする
    app.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.header('Pragma', 'no-cache');
      res.header('Expires', '0');
      next();
    });
  }
  await app.listen(3000);
}
bootstrap();



