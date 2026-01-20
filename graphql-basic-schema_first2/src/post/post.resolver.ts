import { Args, Int, ID, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { PostService } from './post.service';
import { Post as PostModel } from './post.model';
import { UserService } from '../user/user.service';
import { User as UserModel } from '../user/user.model';
import { GetPostInput } from './dto/getPost.dto';

@Resolver( () => PostModel)
export class PostResolver {


    // DI
    constructor(private readonly postService: PostService, 
		private readonly userService: UserService
	       ) {}

    @Query(() => [PostModel], { nullable: true })
    async getPosts(): Promise<PostModel[]> {
        console.log("getPosts");
        return await this.postService.getPosts();
    }

    @Query(() => PostModel, { nullable: false })
    async getPostById(
        @Args('getPostInput') getPostInput: GetPostInput,
    ): Promise<PostModel> {
        console.log("getPostById");
        return await this.postService.getPostById(getPostInput.id);
    }
    @Query(() => PostModel, { nullable: false })
    async getPostById2(
        @Args('getPostInput') getPostInput: GetPostInput,
    ): Promise<PostModel> {
        console.log("getPostById2");
        return await this.postService.getPostById2(getPostInput.id);
    }

    @ResolveField( 'comments', () => [Comment])
    async getComments(@Parent() { id }: PostModel) {
              console.log("getComments");
      return this.postService.getComments( id );
    }

    @ResolveField( 'author', () => UserModel)
    async getAuthor(@Parent() { id }: PostModel) {
              console.log("getComments");
      let user_id = this.postService.getAuthorId( id );
      return this.userService.getUserById( String(user_id) );
    }

}
