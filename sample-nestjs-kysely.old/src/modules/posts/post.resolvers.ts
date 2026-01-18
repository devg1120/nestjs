
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';
import { CreatePostInput } from './interfaces/create-post.input';
import { InjectKysely } from "nestjs-kysely";
import { Kysely } from "kysely";
import { DB } from "../../types";

@Resolver(() => PostModel)
export class PostsResolver {
    //constructor(private readonly prismaService: PrismaService) {
    constructor(@InjectKysely() private readonly db: Kysely<DB>) {

        console.log("hello");
    }

    @Query(() => [PostModel], { name: 'posts', nullable: true })
    async getPosts() {
        //return this.prismaService.post.findMany();
        const result = await this.db
          .selectFrom("posts")
          .selectAll()
          .execute();

	//console.log(result)
        //return JSON.stringify(result);
	return result;
    }

    @Mutation(() => PostModel)
    async createPost(@Args('input') input: CreatePostInput) {
      const now = new Date();
      const timestampMs = now.getTime();
      const isoDate = now.toISOString();
      const id = crypto.randomUUID();

       const result = await this.db
         .insertInto('posts')
         .values({
		id :  id,
                title: input.title,
		updated_at: isoDate,
         })
	 .returning(['id','title','created_at','updated_at'])
         .executeTakeFirst()
       
       console.log(result)
       return result;
       /*
       let  r = {
                    id: 'b5c8830f-241d-4024-93dd-cbc4a5c7ff52',
                    title: 'タイトル999',
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                  };
        return r;
       */
    }
}





/*

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';
import { PrismaService } from '../../prisma.service'
import { CreatePostInput } from './interfaces/create-post.input';

@Resolver(() => PostModel)
export class PostsResolver {
    constructor(private readonly prismaService: PrismaService) {
        console.log("hello");
    }

    @Query(() => [PostModel], { name: 'posts', nullable: true })
    async getPosts() {
        return this.prismaService.post.findMany();
    }

    @Mutation(() => PostModel)
    async createPost(@Args('input') input: CreatePostInput) {
        let result =await  this.prismaService.post.create({
            data: {
                title: input.title,
            }
        });
	console.log(result);
	return result;
    }
}

*/

