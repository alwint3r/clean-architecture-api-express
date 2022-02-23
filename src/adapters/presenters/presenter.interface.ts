import { IResponseObject } from "../controllers/response-object.interface";

export interface IPresenter<Input, Output> {
  present(data: Input): Promise<IResponseObject<Output>>;
}
