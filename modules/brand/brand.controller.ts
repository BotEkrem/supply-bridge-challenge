import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { BrandDto } from "@/dto/product/brand/brand.dto";
import { BrandService } from "./brand.service";
import { BrandUpdateDto } from "@/dto/product/brand/brandUpdate.dto";
import { BrandDeleteDto } from "@/dto/product/brand/brandDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await BrandService.getBrands()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<BrandDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await BrandService.addBrand(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<BrandUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await BrandService.updateBrand(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<BrandDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await BrandService.deleteBrand(req.body)

    res.json(data)
});

export default router;
