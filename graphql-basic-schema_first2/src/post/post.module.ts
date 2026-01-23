import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { CommentResolver } from './comment.resolver';
import { PostService } from './post.service';
import { UserService } from '../user/user.service';

@Module({
  providers: [PostResolver, CommentResolver, PostService, UserService]
})
export class PostModule {}
