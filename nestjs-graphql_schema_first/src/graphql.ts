
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
    id: number;
    name: string;
    email: string;
}

export abstract class IQuery {
    abstract getUsers(): User[] | Promise<User[]>;
}

type Nullable<T> = T | null;
