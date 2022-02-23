import { ICreateDeviceInputPort } from "../../use-cases/create-device.input-port";
import { IController } from "./controller.interface";
import { IRequestObject } from "./request-object.interface";
import { IResponseObject } from "./response-object.interface";

export class CreateDeviceController implements IController {
  private inputPort: ICreateDeviceInputPort<Record<string, any>>;

  constructor(
    inputPort: ICreateDeviceInputPort<Record<string, any>>,
  ) {
    this.inputPort = inputPort;
  }

  async handle(req: IRequestObject): Promise<IResponseObject> {
    const { body } = req;
    const device = await this.inputPort.create(body);

    return {
      body: device,
      statusCode: 201,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
}
