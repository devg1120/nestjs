export type UpdateExampleRequest = {
  id: string;
  name: string;
};

export class UpdateExampleRequestDto implements UpdateExampleRequest {
  public readonly id: string;
  public readonly name: string;
}
