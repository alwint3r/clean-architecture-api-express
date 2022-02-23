import { DeviceEntity } from "../../entities/device.entity";
import { CreateDeviceDto } from "../../use-cases/create-device.dto";
import { ICreateDeviceInputPort } from "../../use-cases/create-device.input-port";
import { IController } from "./controller.interface";
import { IRequestObject } from "./request-object.interface";
export class CreateDeviceController implements IController<DeviceEntity> {
  constructor(
    private readonly inputPort: ICreateDeviceInputPort<
      CreateDeviceDto,
      DeviceEntity
    >
  ) {}

  async handle(req: IRequestObject) {
    const { body } = req;

    return this.inputPort.create(body);
  }
}
