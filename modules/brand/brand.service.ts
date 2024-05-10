import { BrandDto } from "@/dto/product/brand/brand.dto";
import { AppDataSource } from "@/db/data-source";
import { Brand } from "@/entities/brand.entity";
import { BrandUpdateDto } from "@/dto/product/brand/brandUpdate.dto";
import { BrandDeleteDto } from "@/dto/product/brand/brandDelete.dto";

const brandRepository = AppDataSource.getRepository(Brand)

export class BrandService {
    static async getBrands() {
        const data = await brandRepository.find()

        return data
    }

    static async addBrand(data: BrandDto) {
        const entity = await brandRepository.save(
            brandRepository.create(data)
        )

        return {
            data: entity
        }
    }

    static async updateBrand(data: BrandUpdateDto) {
        const entity = await brandRepository.update({ id: data.id }, data)

        return {
            data: entity
        }
    }

    static async deleteBrand(data: BrandDeleteDto) {
        const entity = await brandRepository.softDelete({ id: data.id })

        return {
            data: entity
        }
    }
}