
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface IQuery {
    getUsers(): Nullable<User[]> | Promise<Nullable<User[]>>;
    getUser(getUserInput: GetUserInput): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updatePassword(updateUserPasswordInput: UpdateUserPasswordInput): User | Promise<User>;
    deleteUser(deleteUserInput: DeleteUserInput): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
