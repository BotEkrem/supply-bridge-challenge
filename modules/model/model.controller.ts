import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { ModelDto } from "@/dto/product/model/model.dto";
import { ModelService } from "./model.service";
import { ModelUpdateDto } from "@/dto/product/model/modelUpdate.dto";
import { ModelDeleteDto } from "@/dto/product/model/modelDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await ModelService.getModels()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<ModelDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ModelService.addModel(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<ModelUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ModelService.updateModel(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<ModelDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ModelService.deleteModel(req.body)

    res.json(data)
});

export default router;
