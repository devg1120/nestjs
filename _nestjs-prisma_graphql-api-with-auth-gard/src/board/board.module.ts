import { Module } from '@nestjs/common';
import { BoardController } from './board.controller.js';
import { BoardResolver } from './board.resolver.js';
import { BoardService } from './board.service.js';
import { PostService } from './post.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [BoardController],
  providers: [BoardService, PostService, PrismaService, BoardResolver],
})
export class BoardModule {}

