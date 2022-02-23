import { IRequestObject } from "./request-object.interface";

export interface IController<Output> {
  handle(req: IRequestObject): Promise<Output>;
}
