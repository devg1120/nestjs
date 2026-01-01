import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Board {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

}


