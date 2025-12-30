export type UpdateExampleResponse = {
  id: string;
  name: string;
};

export class UpdateExampleResponseDto implements UpdateExampleResponse {
  public readonly id: string;
  public readonly name: string;

  public constructor(object: UpdateExampleResponse) {
    Object.assign(this, object);
  }
}
