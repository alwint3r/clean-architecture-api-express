export interface IResponseObject<Output> {
  body: Output;
  statusCode: number;
  headers: Record<string, string>;
}
