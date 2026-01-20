
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface GetPostInput {
    id: string;
}

export interface GetUserInput {
    id: string;
}

export interface CreateUserInput {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface UpdateUserPasswordInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
    newPassword?: Nullable<string>;
    confirmPassword?: Nullable<string>;
}

export interface DeleteUserInput {
    email: string;
}

export interface Post {
    id: string;
    title: string;
    content?: Nullable<string>;
    author: User;
    comments: Comment[];
}

export interface Comment {
    id: string;
    text: string;
    post: Post;
    author: User;
}

export interface IQuery {
    getPosts(): Nullable<Post[]> | Promise<Nullable<Post[]>>;
    getPostById(getPostInput: GetPostInput): Nullable<Post> | Promise<Nullable<Post>>;
    getUsers(): Nullable<User[]> | Promise<Nullable<User[]>>;
    getUser(getUserInput: GetUserInput): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createPost(title: string, content: string, authorId: string): Post | Promise<Post>;
    createComment(text: string, postId: string, authorId: string): Comment | Promise<Comment>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updatePassword(updateUserPasswordInput: UpdateUserPasswordInput): User | Promise<User>;
    deleteUser(deleteUserInput: DeleteUserInput): User | Promise<User>;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    posts: Post[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
