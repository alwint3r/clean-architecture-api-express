import { Request, Response, Router } from "express";
import { CreateDeviceController } from "../../../../adapters/controllers/create-device.controller";
import { CreateDevicePresenter } from "../../../../adapters/presenters/create-device.presenter";
import { DeviceService } from "../../../../adapters/services/device.service";
import { CreateDeviceUseCase } from "../../../../use-cases/create-device.use-case";
import { DeviceinMemoryRepositoryBackend } from "../../../database/repository-backend/device-in-mem.repository";
import { createRequestObject } from "../../utils/controller.util";
import { asyncHandler } from "../../utils/handler.util";

export default function deviceRouteFactory(app: Express.Application): Router {
  const router = Router();
  const deviceRepository = new DeviceinMemoryRepositoryBackend();
  const deviceService = new DeviceService(deviceRepository);
  const createDevicePresenter = new CreateDevicePresenter();
  const createDeviceUseCase = new CreateDeviceUseCase(
    deviceService,
  );
  const createDeviceController = new CreateDeviceController(
    createDeviceUseCase
  );

  async function createDeviceHandler(req: Request, res: Response) {
    const requestObject = createRequestObject(req);
    const result = await createDeviceController.handle(requestObject);
    const responseObject = await createDevicePresenter.present(result);

    res.status(responseObject.statusCode).send(responseObject.body).end();
  }

  router.post("/", asyncHandler(createDeviceHandler));

  return router;
}
