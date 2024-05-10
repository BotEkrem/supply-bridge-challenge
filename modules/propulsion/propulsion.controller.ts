import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { PropulsionDto } from "@/dto/product/propulsion/propulsion.dto";
import { PropulsionService } from "./propulsion.service";
import { PropulsionUpdateDto } from "@/dto/product/propulsion/propulsionUpdate.dto";
import { PropulsionDeleteDto } from "@/dto/product/propulsion/propulsionDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await PropulsionService.getPropulsions()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<PropulsionDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await PropulsionService.addPropulsion(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<PropulsionUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await PropulsionService.updatePropulsion(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<PropulsionDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await PropulsionService.deletePropulsion(req.body)

    res.json(data)
});

export default router;
