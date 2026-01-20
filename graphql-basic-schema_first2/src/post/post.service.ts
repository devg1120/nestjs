import { Injectable, NotFoundException } from '@nestjs/common';
import { Post as PostModel } from './post.model';
import { Comment as CommentModel } from './post.model';

import { DateTime } from 'luxon';


const Posts : PostModel[] = [
  {
  id: 1,
  title: "title hello 1",
  content: "content content content",
  authorID: "1",
  createdAt: DateTime.fromISO('2020-05-08T22:16:39'),
  updatedAt: DateTime.fromISO('2020-05-08T22:16:39'),
  },
  {
  id: 2,
  title: "title hello 2",
  content: "content content content",
  authorID: "2",
  createdAt: DateTime.fromISO('2020-05-08T22:16:39'),
  updatedAt: DateTime.fromISO('2020-05-08T22:16:39'),
  },
  {
  id: 3,
  title: "title hello 3",
  content: "content content content",
  authorID: "3",
  createdAt: DateTime.fromISO('2020-05-08T22:16:39'),
  updatedAt: DateTime.fromISO('2020-05-08T22:16:39'),
  },
];

let post_max_id  = 3;

const Comments : CommentModel[] = [
  {
  id: 1,
  text: "comment 1",
  postID: "1",
  authorID: "1",
  createdAt: DateTime.fromISO('2020-05-08T22:16:39'),
  updatedAt: DateTime.fromISO('2020-05-08T22:16:39'),
  },
  {
  id: 2,
  text: "comment 2",
  postID: "1",
  authorID: "2",
  createdAt: DateTime.fromISO('2020-05-08T22:16:39'),
  updatedAt: DateTime.fromISO('2020-05-08T22:16:39'),
  },

];

let comment_max_id  = 2;


@Injectable()
export class PostService {

    constructor() {}

    async getPosts(): Promise<PostModel[]> {
        return  Posts;
    }

    async getPostById(
        id: string,
    ): Promise<PostModel> {
            console.log("getPostById", id);
        for ( let i = 0 ; i < Posts.length ; i++) {
           if ( Number(id) == Posts[i].id ) {
                  return  await Posts[i];
           }
        }

        return await Posts[0]
    }

    async getComments(
        postId: number,
    ): Promise<CommentModel[]> {
            console.log("getCommenst", postId);
       let c : CommentModel[] = [];
        for ( let i = 0 ; i < Comments.length ; i++) {
           if ( Number(postId) == Number(Comments[i].postID )) {
                  c.push(Comments[i]);
           }
        }

        return  c
    }

    async getAuthorId(
        postId: number,
    ): Promise<string> {
            console.log("getAuthorId", postId);
        for ( let i = 0 ; i < Comments.length ; i++) {
           if ( Number(postId) == Number(Comments[i].postID )) {
                  Comments[i].authorID
           }
        }

        return   Comments[0].authorID
    }

    async getPostById2(
        id: string,
    ): Promise<PostModel> {
            console.log("getPostById", id);
        for ( let i = 0 ; i < Posts.length ; i++) {
           if ( Number(id) == Posts[i].id ) {
                  //return  await Posts[i];
                  let tmp = Posts[i];
		  tmp["author"] = { id : "1", name : "gusa" }
                  return  await tmp
           }
        }

        return await Posts[0]
    }


}
