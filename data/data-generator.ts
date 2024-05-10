import xlsx from "node-xlsx";
import {AppDataSource} from "@/db/data-source";
import {Product} from "@/entities/product.entity";
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

async function generate() {
    await AppDataSource.initialize()
    const excelData = xlsx.parse(__dirname + '/data.xlsx')[0].data.slice(1);

    const OemOriginRepository = AppDataSource.getRepository(OemOrigin)
    const ProductionRegionRepository = AppDataSource.getRepository(ProductionRegion)
    const BrandRepository = AppDataSource.getRepository(Brand)
    const VehicleTypeRepository = AppDataSource.getRepository(VehicleType)
    const PropulsionRepository = AppDataSource.getRepository(Propulsion)
    const ComponentCategoryRepository = AppDataSource.getRepository(ComponentCategory)
    const MakerRepository = AppDataSource.getRepository(Maker)
    const ModelRepository = AppDataSource.getRepository(Model)
    const PropulsionTypeRepository = AppDataSource.getRepository(PropulsionType)
    const SupplierRepository = AppDataSource.getRepository(Supplier)
    const ProductRepository = AppDataSource.getRepository(Product)

    for await (let product of excelData) {
        const OemOriginEntity = await OemOriginRepository.findOneByOrFail(
            {name: product[1] as string}
        ).catch(async () => {
            return OemOriginRepository.save(
                OemOriginRepository.create({name: product[1] as string})
            )
        })

        const ProductionRegionEntity = await ProductionRegionRepository.findOneByOrFail(
            {name: product[2] as string}
        ).catch(async () => {
            return ProductionRegionRepository.save(
                ProductionRegionRepository.create({name: product[2] as string})
            )
        })

        const BrandEntity = await BrandRepository.findOneByOrFail(
            {name: product[4] as string}
        ).catch(async () => {
            return BrandRepository.save(
                BrandRepository.create({name: product[4] as string})
            )
        })

        const MakerEntity = await MakerRepository.findOneByOrFail(
            {name: product[3] as string, brand: {id: BrandEntity.id}}
        ).catch(async () => {
            return MakerRepository.save(
                MakerRepository.create({name: product[3] as string, brand: {id: BrandEntity.id}})
            )
        })

        const ModelEntity = await ModelRepository.findOneByOrFail(
            {name: product[5] as string, brand: {id: BrandEntity.id}}
        ).catch(async () => {
            return ModelRepository.save(
                ModelRepository.create({name: product[5] as string, brand: {id: BrandEntity.id}})
            )
        })

        const VehicleTypeEntity = await VehicleTypeRepository.findOneByOrFail(
            {name: product[6] as string}
        ).catch(async () => {
            return VehicleTypeRepository.save(
                VehicleTypeRepository.create({name: product[6] as string})
            )
        })

        const PropulsionEntity = await PropulsionRepository.findOneByOrFail(
            {name: product[7] as string}
        ).catch(async () => {
            return PropulsionRepository.save(
                PropulsionRepository.create({name: product[7] as string})
            )
        })

        const PropulsionTypeEntity = await PropulsionTypeRepository.findOneByOrFail(
            {name: product[8] as string, propulsion: {id: PropulsionEntity.id}}
        ).catch(async () => {
            return PropulsionTypeRepository.save(
                PropulsionTypeRepository.create({name: product[8] as string, propulsion: {id: PropulsionEntity.id}})
            )
        })

        const SupplierEntity = await SupplierRepository.findOneByOrFail(
            {shortName: product[11] as string, longName: product[12] as string}
        ).catch(async () => {
            return SupplierRepository.save(
                SupplierRepository.create({shortName: product[11] as string, longName: product[12] as string})
            )
        })

        const ComponentCategoryEntity = await ComponentCategoryRepository.findOneByOrFail(
            {name: product[15] as string}
        ).catch(async () => {
            return ComponentCategoryRepository.save(
                ComponentCategoryRepository.create({name: product[15] as string})
            )
        })

        await ProductRepository.save(
            ProductRepository.create({
                idOEM: product[0],
                oemOrigin: {id: OemOriginEntity.id},
                productionRegion: {id: ProductionRegionEntity.id},
                maker: {id: MakerEntity.id},
                brand: {id: BrandEntity.id},
                model: {id: ModelEntity.id},
                vehicleType: {id: VehicleTypeEntity.id},
                propulsion: {id: PropulsionEntity.id},
                propulsionType: {id: PropulsionTypeEntity.id},
                vehicleProductionCountry: product[9],
                modelYear: product[10],
                supplier: {id: SupplierEntity.id},
                L0: product[13],
                L1: product[14],
                componentCategory: {id: ComponentCategoryEntity.id},
                productName: product[16],
                additionalInformations: product[17]
            })
        )
    }

    console.log("Successfully generated.")
}

generate()
