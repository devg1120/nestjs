import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { IsMatch } from "../decorator/customDecorator";

@InputType()
export class GetCommentInput {

    @Field()
    @IsNotEmpty()
    id: string;

}

