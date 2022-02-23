import { DeviceEntity } from "../entities/device.entity";
import { CreateDeviceDto } from "./create-device.dto";
import { ICreateDeviceInputPort } from "./create-device.input-port";
import { IDeviceRepository } from "./device.repository";

export class CreateDeviceUseCase
  implements ICreateDeviceInputPort<CreateDeviceDto>
{
  constructor(private readonly deviceRepository: IDeviceRepository) {}
  async create(data: CreateDeviceDto): Promise<DeviceEntity> {
    const existing = await this.deviceRepository.findExisting(data.id);
    if (existing) {
      throw new Error('Device already exists');
    }
    
    const device = DeviceEntity.fromPartial(data);
    return this.deviceRepository.create(device);
  }
}
