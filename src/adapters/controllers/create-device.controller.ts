import { DeviceEntity } from "../../entities/device.entity";
import { CreateDeviceDto } from "../../use-cases/create-device.dto";
import { ICreateDeviceInputPort } from "../../use-cases/create-device.input-port";
import { IController } from "./controller.interface";
import { IRequestObject } from "./request-object.interface";
export class CreateDeviceController implements IController {
  private inputPort: ICreateDeviceInputPort<CreateDeviceDto, DeviceEntity>;

  constructor(inputPort: ICreateDeviceInputPort<CreateDeviceDto, DeviceEntity>) {
    this.inputPort = inputPort;
  }

  async handle(req: IRequestObject) {
    const { body } = req;

    return this.inputPort.create(body);
  }
}
