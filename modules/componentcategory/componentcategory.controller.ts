import * as express from "express";
import { Request, Response, NextFunction } from "express";

import { bodyValidationMiddleware } from "@/middlewares/bodyvalidation.middleware";
import { ComponentCategoryDto } from "@/dto/product/componentCategory/componentCategory.dto";
import { ComponentCategoryService } from "./componentcategory.service";
import { ComponentCategoryUpdateDto } from "@/dto/product/componentCategory/componentCategoryUpdate.dto";
import { ComponentCategoryDeleteDto } from "@/dto/product/componentCategory/componentCategoryDelete.dto";

const router = express.Router()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await ComponentCategoryService.getComponentCategorys()

    res.json(data)
});

router.post("/", bodyValidationMiddleware<ComponentCategoryDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ComponentCategoryService.addComponentCategory(req.body)

    res.json(data)
});

router.put("/", bodyValidationMiddleware<ComponentCategoryUpdateDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ComponentCategoryService.updateComponentCategory(req.body)

    res.json(data)
});

router.delete("/", bodyValidationMiddleware<ComponentCategoryDeleteDto>, async (req: Request, res: Response, next: NextFunction) => {
    const data = await ComponentCategoryService.deleteComponentCategory(req.body)

    res.json(data)
});

export default router;
