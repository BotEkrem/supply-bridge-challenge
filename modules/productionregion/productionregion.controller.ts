import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { ProductionRegionDto } from "@/dto/product/productionRegion/productionRegion.dto";
import { ProductionRegionService } from "./productionregion.service";
import { ProductionRegionUpdateDto } from "@/dto/product/productionRegion/productionRegionUpdate.dto";
import { ProductionRegionDeleteDto } from "@/dto/product/productionRegion/productionRegionDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await ProductionRegionService.getProductionRegions()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<ProductionRegionDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ProductionRegionService.addProductionRegion(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<ProductionRegionUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ProductionRegionService.updateProductionRegion(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<ProductionRegionDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ProductionRegionService.deleteProductionRegion(req.body)

    res.json(data)
});

export default router;
