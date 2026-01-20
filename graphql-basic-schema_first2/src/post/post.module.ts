import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { UserService } from '../user/user.service';

@Module({
  providers: [PostResolver, PostService, UserService]
})
export class PostModule {}
