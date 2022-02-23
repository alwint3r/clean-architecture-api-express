import { IDeviceRepository } from "../../../adapters/services/device.repository";
import { DeviceEntity } from "../../../entities/device.entity";

export class DeviceinMemoryRepositoryBackend implements IDeviceRepository {
  private devices: DeviceEntity[] = [];

  async create(device: DeviceEntity): Promise<DeviceEntity> {
    this.devices.push(device);
    return device;
  }

  async findById(deviceId: string): Promise<DeviceEntity> {
    const device = this.devices.find(d => d.id === deviceId);
    return device;
  }
}
