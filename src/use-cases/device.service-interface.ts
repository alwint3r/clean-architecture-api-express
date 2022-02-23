import { DeviceEntity } from "../entities/device.entity";
import { CreateDeviceDto } from "./create-device.dto";

export interface IDeviceService {
  create(device: CreateDeviceDto): Promise<DeviceEntity>;
  findExisting(deviceId: string): Promise<DeviceEntity>;
}
