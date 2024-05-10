import { ModelDto } from "@/dto/product/model/model.dto";
import { AppDataSource } from "@/db/data-source";
import { Model } from "@/entities/model.entity";
import { ModelUpdateDto } from "@/dto/product/model/modelUpdate.dto";
import { ModelDeleteDto } from "@/dto/product/model/modelDelete.dto";

const modelRepository = AppDataSource.getRepository(Model)

export class ModelService {
    static async getModels() {
        const data = await modelRepository.find({relations: ["brand"]})

        return data
    }

    static async addModel(data: ModelDto) {
        const entity = await modelRepository.save(
            modelRepository.create({...data, brand: { id: data.brandId }})
        )

        return {
            data: entity
        }
    }

    static async updateModel(data: ModelUpdateDto) {
        const {brandId, ...parsedData} = data
        const entity = await modelRepository.update({ id: data.id }, {...parsedData, brand: { id: brandId }})

        return {
            data: entity
        }
    }

    static async deleteModel(data: ModelDeleteDto) {
        const entity = await modelRepository.softDelete({ id: data.id })

        return {
            data: entity
        }
    }
}