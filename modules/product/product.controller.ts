import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { ProductDto } from "@/dto/product/product/product.dto";
import { ProductService } from "./product.service";
import { ProductUpdateDto } from "@/dto/product/product/productUpdate.dto";
import { ProductDeleteDto } from "@/dto/product/product/productDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await ProductService.getProducts()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<ProductDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ProductService.addProduct(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<ProductUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ProductService.updateProduct(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<ProductDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ProductService.deleteProduct(req.body)

    res.json(data)
});

export default router;
