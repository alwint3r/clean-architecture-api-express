import { DeviceEntity } from "../entities/device.entity";

export interface ICreateDeviceOutputPort<T> {
  serialize(entity: DeviceEntity): Promise<T>;
}
