import { DeviceEntity } from "../../entities/device.entity";
import { CreateDeviceDto } from "../../use-cases/create-device.dto";
import { IDeviceService } from "../../use-cases/device.service-interface";
import { IDeviceRepository } from "./device.repository";

export class DeviceService implements IDeviceService {
  constructor(private repository: IDeviceRepository) {}

  create(device: CreateDeviceDto): Promise<DeviceEntity> {
    return this.repository.create(device);
  }

  findExisting(deviceId: string): Promise<DeviceEntity> {
    return this.repository.findById(deviceId);
  }
}
