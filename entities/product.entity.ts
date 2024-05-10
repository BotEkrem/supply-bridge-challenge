import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import {OemOrigin} from "@/entities/oemOrigin.entity";
import {ProductionRegion} from "@/entities/productionRegion.entity";
import {Maker} from "@/entities/maker.entity";
import {Brand} from "@/entities/brand.entity";
import {Model} from "@/entities/model.entity";
import {VehicleType} from "@/entities/vehicleType.entity";
import {Propulsion} from "@/entities/propulsion.entity";
import {PropulsionType} from "@/entities/propulsionType.entity";
import {Supplier} from "@/entities/supplier.entity";
import {ComponentCategory} from "@/entities/componentCategory.entity";


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: String, nullable: false })
    idOEM: string;

    @ManyToOne(() => OemOrigin, (oemOrigin) => oemOrigin.products)
    oemOrigin: OemOrigin;

    @ManyToOne(() => ProductionRegion, (productionRegion) => productionRegion.products)
    productionRegion: ProductionRegion;

    @ManyToOne(() => Maker, (maker) => maker.products)
    maker: Maker;

    @ManyToOne(() => Brand, (brand) => brand.products)
    brand: Brand;

    @ManyToOne(() => Model, (model) => model.products)
    model: Model;

    @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.products)
    vehicleType: VehicleType;

    @ManyToOne(() => Propulsion, (propulsion) => propulsion.products)
    propulsion: Propulsion;

    @ManyToOne(() => PropulsionType, (propulsionType) => propulsionType.products)
    propulsionType: PropulsionType;

    @Column({ type: String, nullable: false })
    vehicleProductionCountry: string;

    @Column({ type: String, nullable: false })
    modelYear: string;

    @ManyToOne(() => Supplier, (supplier) => supplier.products)
    supplier: Supplier;

    @Column({ type: String, nullable: false })
    L0: string;

    @Column({ type: String, nullable: false })
    L1: string;

    @ManyToOne(() => ComponentCategory, (componentCategory) => componentCategory.products)
    componentCategory: ComponentCategory;

    @Column({ type: String, nullable: false })
    productName: string;

    @Column({ type: String, nullable: false })
    additionalInformations: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}