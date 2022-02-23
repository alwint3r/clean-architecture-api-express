import { DeviceImplRepository } from "../../../adapters/repositories/device-impl.repository";
import { DeviceEntity } from "../../../entities/device.entity";

export class DeviceinMemoryRepositoryBackend extends DeviceImplRepository {
  private devices: DeviceEntity[] = [];

  async create(device: DeviceEntity): Promise<DeviceEntity> {
    this.devices.push(device);
    return device;
  }

  async findExisting(deviceId: string): Promise<DeviceEntity> {
    const device = this.devices.find((d) => d.id === deviceId);
    return device;
  }
}
