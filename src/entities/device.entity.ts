export class DeviceEntity {
  id: string;
  name: string;
  serialNumber: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(device: DeviceEntity) {
    this.id = device.id;
    this.name = device.name;
    this.serialNumber = device.serialNumber;
    this.createdAt = device.createdAt;
    this.updatedAt = device.updatedAt;
  }

  static fromPartial(partial: Partial<DeviceEntity>): DeviceEntity {
    const device = new DeviceEntity({
      id: partial.id,
      name: partial.name,
      serialNumber: partial.serialNumber,
      createdAt: partial.createdAt,
      updatedAt: partial.updatedAt,
    });

    return device;
  }
}
