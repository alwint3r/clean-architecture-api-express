import { DeviceEntity } from "../../entities/device.entity";

export interface IDeviceRepository {
  create(device: DeviceEntity): Promise<DeviceEntity>;
  findById(deviceId: string): Promise<DeviceEntity>;
}