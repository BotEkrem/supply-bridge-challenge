import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { VehicleTypeDto } from "@/dto/product/vehicleType/vehicleType.dto";
import { VehicleTypeService } from "./vehicletype.service";
import { VehicleTypeUpdateDto } from "@/dto/product/vehicleType/vehicleTypeUpdate.dto";
import { VehicleTypeDeleteDto } from "@/dto/product/vehicleType/vehicleTypeDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await VehicleTypeService.getVehicleTypes()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<VehicleTypeDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await VehicleTypeService.addVehicleType(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<VehicleTypeUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await VehicleTypeService.updateVehicleType(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<VehicleTypeDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await VehicleTypeService.deleteVehicleType(req.body)

    res.json(data)
});

export default router;
