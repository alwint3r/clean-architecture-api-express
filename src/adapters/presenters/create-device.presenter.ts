import { DeviceEntity } from "../../entities/device.entity";
import { IResponseObject } from "../controllers/response-object.interface";
import { IPresenter } from "./presenter.interface";

export class CreateDevicePresenter implements IPresenter<DeviceEntity> {
  async present(data: DeviceEntity): Promise<IResponseObject> {
    return {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      statusCode: 201,
    };
  }
}
