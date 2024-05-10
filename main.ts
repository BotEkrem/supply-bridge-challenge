import * as express from "express";
import * as dotenv from "dotenv";
import * as passport from "passport";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";

import { AppDataSource } from "@/db/data-source";
import { jwtSessionMiddleware } from "@/middlewares/jwtsession.middleware";
import passportStrategy from "@/strategy/passport.strategy";

import AuthController from "@/modules/auth/auth.controller";
import OemOriginController from "@/modules/oemorigin/oemorigin.controller";
import ProductionRegionController from "@/modules/productionregion/productionregion.controller";
import BrandController from "@/modules/brand/brand.controller";
import VehicleTypeController from "@/modules/vehicletype/vehicletype.controller";
import PropulsionController from "@/modules/propulsion/propulsion.controller";
import ComponentCategoryController from "@/modules/componentcategory/componentcategory.controller";
import MakerController from "@/modules/maker/maker.controller";
import ModelController from "@/modules/model/model.controller";
import PropulsionTypeController from "@/modules/propulsiontype/propulsiontype.controller";
import SupplierController from "@/modules/supplier/supplier.controller";
import ProductController from "@/modules/product/product.controller";

dotenv.config();
passportStrategy(passport);

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json())
app.use(jwtSessionMiddleware)

app.use("/auth", AuthController)
app.use("/oemorigin", OemOriginController)
app.use("/productionregion", ProductionRegionController)
app.use("/brand", BrandController)
app.use("/vehicletype", VehicleTypeController)
app.use("/propulsion", PropulsionController)
app.use("/componentcategory", ComponentCategoryController)
app.use("/maker", MakerController)
app.use("/model", ModelController)
app.use("/propulsiontype", PropulsionTypeController)
app.use("/supplier", SupplierController)
app.use("/product", ProductController)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`SupplyBridgeChallenge app listening on port ${port}`)
})

async function main() {
    await AppDataSource.initialize()
}

main()