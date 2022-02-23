import { IResponseObject } from "../controllers/response-object.interface";

export interface IPresenter<T> {
  present(data: T): Promise<IResponseObject>;
}
