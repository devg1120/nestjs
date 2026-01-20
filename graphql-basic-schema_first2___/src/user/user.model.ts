import { Field, Int, ObjectType } from "@nestjs/graphql";
import { DateTime } from 'luxon';

/**
 * ユーザーモデル
 */
@ObjectType()
export class User {

    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    //createdAt: Date;
    createdAt: DateTime;

    @Field()
    //updatedAt: Date;
    updatedAt: DateTime;
}

