export interface IRequestObject {
  body: any;
  headers: Record<string, string>;
  query: Record<string, string>;
  params: Record<string, string>;
  path: string;
}
