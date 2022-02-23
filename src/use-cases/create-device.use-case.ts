import { DeviceEntity } from "../entities/device.entity";
import { CreateDeviceDto } from "./create-device.dto";
import { ICreateDeviceInputPort } from "./create-device.input-port";

export class CreateDeviceUseCase implements ICreateDeviceInputPort<CreateDeviceDto> {
  async create(data: CreateDeviceDto): Promise<DeviceEntity> {
    return DeviceEntity.fromPartial(data);
  }
}
