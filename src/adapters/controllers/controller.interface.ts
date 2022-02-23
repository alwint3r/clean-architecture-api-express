import { IRequestObject } from "./request-object.interface";
import { IResponseObject } from "./response-object.interface";

export interface IController {
  handle(req: IRequestObject): Promise<IResponseObject>;
}
