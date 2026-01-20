import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PostService } from './post.service';
import { Post as PostModel } from './post.model';
import { GetPostInput } from './dto/getPost.dto';

@Resolver()
export class PostResolver {


    // DI
    constructor(private readonly postService: PostService) {}

    @Query(() => [PostModel], { nullable: true })
    async getPosts(): Promise<PostModel[]> {
        console.log("getPosts");
        return await this.postService.getPosts();
    }

    @Query(() => PostModel, { nullable: false })
    async getPostById(
        @Args('getPostInput') getPostInput: GetPostInput,
    ): Promise<PostModel> {
        console.log("getPost");
        return await this.postService.getPostById(getPostInput.id);
    }

}
