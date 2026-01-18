
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export class UpdateUserPasswordInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
    newPassword?: Nullable<string>;
    confirmPassword?: Nullable<string>;
}

export class DeleteUserInput {
    email: string;
}

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export abstract class IQuery {
    abstract getUsers(): Nullable<User[]> | Promise<Nullable<User[]>>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updatePassword(updateUserPasswordInput: UpdateUserPasswordInput): User | Promise<User>;

    abstract deleteUser(deleteUserInput: DeleteUserInput): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
