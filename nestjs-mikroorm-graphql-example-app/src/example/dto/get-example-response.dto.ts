import { Example } from '../example.entity';

export type GetExampleResponse = {
  id: string;
  name: string;
};

export class GetExampleResponseDto implements GetExampleResponse {
  public readonly id: string;
  public readonly name: string;

  public constructor(object: Example) {
    Object.assign(this, object);
  }
}
