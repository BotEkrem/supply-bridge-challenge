import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { MakerDto } from "@/dto/product/maker/maker.dto";
import { MakerService } from "./maker.service";
import { MakerUpdateDto } from "@/dto/product/maker/makerUpdate.dto";
import { MakerDeleteDto } from "@/dto/product/maker/makerDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await MakerService.getMakers()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<MakerDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await MakerService.addMaker(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<MakerUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await MakerService.updateMaker(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<MakerDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await MakerService.deleteMaker(req.body)

    res.json(data)
});

export default router;
