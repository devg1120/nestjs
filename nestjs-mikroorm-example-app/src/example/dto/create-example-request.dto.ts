export type CreateExampleRequest = {
  name: string;
};

export class CreateExampleRequestDto implements CreateExampleRequest {
  public readonly name: string;
}
