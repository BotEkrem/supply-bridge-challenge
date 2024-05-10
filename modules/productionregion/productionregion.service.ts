import { ProductionRegionDto } from "@/dto/product/productionRegion/productionRegion.dto";
import { AppDataSource } from "@/db/data-source";
import { ProductionRegion } from "@/entities/productionRegion.entity";
import { ProductionRegionUpdateDto } from "@/dto/product/productionRegion/productionRegionUpdate.dto";
import { ProductionRegionDeleteDto } from "@/dto/product/productionRegion/productionRegionDelete.dto";

const productionRegionRepository = AppDataSource.getRepository(ProductionRegion)

export class ProductionRegionService {
    static async getProductionRegions() {
        const data = await productionRegionRepository.find()

        return data
    }

    static async addProductionRegion(data: ProductionRegionDto) {
        const entity = await productionRegionRepository.save(
            productionRegionRepository.create(data)
        )

        return {
            data: entity
        }
    }

    static async updateProductionRegion(data: ProductionRegionUpdateDto) {
        const entity = await productionRegionRepository.update({ id: data.id }, data)

        return {
            data: entity
        }
    }

    static async deleteProductionRegion(data: ProductionRegionDeleteDto) {
        const entity = await productionRegionRepository.softDelete({ id: data.id })

        return {
            data: entity
        }
    }
}