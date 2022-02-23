export interface ICreateDeviceInputPort<I, O> {
  create(data: I): Promise<O>;
}
