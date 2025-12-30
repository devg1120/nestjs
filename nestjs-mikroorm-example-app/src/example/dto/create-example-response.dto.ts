export type CreateExampleResponse = {
  id: string;
  name: string;
};

export class CreateExampleResponseDto implements CreateExampleResponse {
  public readonly id: string;
  public readonly name: string;

  public constructor(object: CreateExampleResponse) {
    Object.assign(this, object);
  }
}
