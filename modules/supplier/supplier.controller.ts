import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { SupplierDto } from "@/dto/product/supplier/supplier.dto";
import { SupplierService } from "./supplier.service";
import { SupplierUpdateDto } from "@/dto/product/supplier/supplierUpdate.dto";
import { SupplierDeleteDto } from "@/dto/product/supplier/supplierDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await SupplierService.getSuppliers()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<SupplierDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await SupplierService.addSupplier(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<SupplierUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await SupplierService.updateSupplier(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<SupplierDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await SupplierService.deleteSupplier(req.body)

    res.json(data)
});

export default router;
