
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.enableCors();
  app.enableCors({
    //origin: 'http://localhost:****',
    origin: '*',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe()); // ここを追加

  await app.listen(3000);
}
bootstrap();

