import { Args, Int, ID, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { PostService } from './post.service';
import { Comment as CommentModel } from './post.model';
import { UserService } from '../user/user.service';
import { User as UserModel } from '../user/user.model';
import { GetPostInput } from './dto/getPost.dto';
import { GetCommentInput } from './dto/getComment.dto';

//@Resolver( () => PostModel)
@Resolver( 'Comment')
export class CommentResolver {


    // DI
    constructor(private readonly postService: PostService, 
		private readonly userService: UserService
	       ) {}

    @Query(() => [CommentModel], { nullable: true })
    async getComments(): Promise<CommentModel[]> {
        console.log("getComments");
        return await this.postService.getAllComments();
    }

    @Query(() => CommentModel, { nullable: true })
    async getCommentById(
        @Args('getCommentInput') getCommentInput: GetCommentInput,
    ): Promise<CommentModel> {
        console.log("getCommentById",getCommentInput.id);
        return await this.postService.getCommentById(String(getCommentInput.id));
    }



    @ResolveField( 'author', () => UserModel)
    async getAuthor(@Parent() { id }: UserModel) {
      return await this.userService.getUserById( String(id) );
    }


/*
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
    
    @ResolveField( 'comments2', () => [Comment])
    async getComments2(@Parent() { id }: PostModel) {
              console.log("getComments2");
      return this.postService.getComments2( id );
    }

    @ResolveField( 'comments3', () => [Comment])
    async getComments3(@Parent() { id }: PostModel) {
              console.log("getComments3");
      let comments = await this.postService.getComments( id );
      for (let i = 0; i < comments.length ; i++) {
        console.log(comments[i].authorID)
        let user_id = comments[i].authorID
        let user = this.userService.getUserById( String(user_id) );
	comments[i]["author"] = user;
      }
      return comments
    }

    @ResolveField( 'author', () => UserModel)
    async getAuthor(@Parent() { id }: PostModel) {
              console.log("getComments");
      let user_id = this.postService.getAuthorId( id );
      return this.userService.getUserById( String(user_id) );
    }
*/
}
