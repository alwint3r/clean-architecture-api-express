import { DeviceEntity } from "../entities/device.entity";

export interface ICreateDeviceInputPort<T> {
  create(data: T): Promise<DeviceEntity>;
}
