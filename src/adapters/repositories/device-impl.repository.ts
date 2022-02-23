import { DeviceEntity } from "../../entities/device.entity";
import { CreateDeviceDto } from "../../use-cases/create-device.dto";
import { IDeviceRepository } from "../../use-cases/device.repository";

export class DeviceImplRepository implements IDeviceRepository {
  create(device: CreateDeviceDto): Promise<DeviceEntity> {
    throw new Error("Method not implemented.");
  }

  findExisting(deviceId: string): Promise<DeviceEntity> {
    throw new Error("Method not implemented.");
  }
}