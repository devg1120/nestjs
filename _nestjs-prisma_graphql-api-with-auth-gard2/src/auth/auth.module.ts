import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
//import { PrismaModule } from '../prisma/prisma.module.js';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma.service.js';
import { LocalStrategy } from '../common/localStrategy.js';
import { AuthSerializer } from './serialization.provider.js';


@Module({
  //imports: [PrismaModule, PassportModule.register({ session: true })],
  imports: [PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [PrismaService, LocalStrategy, AuthSerializer],
})
export class AuthModule {}



