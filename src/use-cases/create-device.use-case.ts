import { DeviceEntity } from "../entities/device.entity";
import { CreateDeviceDto } from "./create-device.dto";
import { ICreateDeviceInputPort } from "./create-device.input-port";
import { IDeviceService } from "./device.service-interface";

export class CreateDeviceUseCase
  implements ICreateDeviceInputPort<CreateDeviceDto, DeviceEntity>
{
  constructor(private readonly deviceService: IDeviceService) {}
  async create(data: CreateDeviceDto) {
    const existing = await this.deviceService.findExisting(data.id);
    if (existing) {
      throw new Error("Device already exists");
    }

    const device = DeviceEntity.fromPartial(data);
    return this.deviceService.create(device);
  }
}
