import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { PropulsionTypeDto } from "@/dto/product/propulsionType/propulsionType.dto";
import { PropulsionTypeService } from "./propulsiontype.service";
import { PropulsionTypeUpdateDto } from "@/dto/product/propulsionType/propulsionTypeUpdate.dto";
import { PropulsionTypeDeleteDto } from "@/dto/product/propulsionType/propulsionTypeDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await PropulsionTypeService.getPropulsionTypes()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<PropulsionTypeDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await PropulsionTypeService.addPropulsionType(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<PropulsionTypeUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await PropulsionTypeService.updatePropulsionType(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<PropulsionTypeDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await PropulsionTypeService.deletePropulsionType(req.body)

    res.json(data)
});

export default router;
