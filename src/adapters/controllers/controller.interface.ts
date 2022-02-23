import { IRequestObject } from "./request-object.interface";

export interface IController {
  handle(req: IRequestObject): void;
}
