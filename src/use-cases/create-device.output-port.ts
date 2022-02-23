import { DeviceEntity } from "../entities/device.entity";

export interface ICreateDeviceOutputPort<T> {
  present(entity: DeviceEntity): Promise<T>;
}
