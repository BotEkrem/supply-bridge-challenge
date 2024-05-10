import {DataSource} from "typeorm";
import * as dotenv from "dotenv";

import {User} from "@/entities/user.entity";
import {OemOrigin} from "@/entities/oemOrigin.entity";
import {ProductionRegion} from "@/entities/productionRegion.entity";
import {Brand} from "@/entities/brand.entity";
import {VehicleType} from "@/entities/vehicleType.entity";
import {Propulsion} from "@/entities/propulsion.entity";
import {ComponentCategory} from "@/entities/componentCategory.entity";
import {Maker} from "@/entities/maker.entity";
import {Model} from "@/entities/model.entity";
import {PropulsionType} from "@/entities/propulsionType.entity";
import {Supplier} from "@/entities/supplier.entity";
import {Product} from "@/entities/product.entity";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
        User,
        OemOrigin,
        ProductionRegion,
        Brand,
        VehicleType,
        Propulsion,
        ComponentCategory,
        Maker,
        Model,
        PropulsionType,
        Supplier,
        Product
    ],
})