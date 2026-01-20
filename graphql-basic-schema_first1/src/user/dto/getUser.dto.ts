import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { IsMatch } from "../decorator/customDecorator";

/**
 * ユーザー作成[DTO]
 */
@InputType()
export class GetUserInput {

    @Field()
    @IsNotEmpty()
    id: string;

}

