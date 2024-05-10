import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { OemOriginDto } from "@/dto/product/oemOrigin/oemOrigin.dto";
import { OemOriginService } from "./oemorigin.service";
import { OemOriginUpdateDto } from "@/dto/product/oemOrigin/oemOriginUpdate.dto";
import { OemOriginDeleteDto } from "@/dto/product/oemOrigin/oemOriginDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await OemOriginService.getOemOrigins()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<OemOriginDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await OemOriginService.addOemOrigin(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<OemOriginUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await OemOriginService.updateOemOrigin(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<OemOriginDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await OemOriginService.deleteOemOrigin(req.body)

    res.json(data)
});

export default router;
