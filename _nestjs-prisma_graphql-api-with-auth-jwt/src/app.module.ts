

import { Module } from '@nestjs/common';
//import { AppController } from './app.controller.js';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service.js';
import { PrismaService } from './prisma.service.js';

import { join } from 'path';
import { AuthModule } from './auth/auth.module.js';


@Module({
  //imports: [ConfigModule.forRoot()],
  imports:[ 
    AuthModule,
    //UserModule,

  ],
//  controllers: [AppController],
  providers: [AppService, PrismaService ],
  
})
export class AppModule {}

