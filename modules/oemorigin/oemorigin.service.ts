import { OemOriginDto } from "@/dto/product/oemOrigin/oemOrigin.dto";
import { AppDataSource } from "@/db/data-source";
import { OemOrigin } from "@/entities/oemOrigin.entity";
import { OemOriginUpdateDto } from "@/dto/product/oemOrigin/oemOriginUpdate.dto";
import { OemOriginDeleteDto } from "@/dto/product/oemOrigin/oemOriginDelete.dto";

const oemOriginRepository = AppDataSource.getRepository(OemOrigin)

export class OemOriginService {
    static async getOemOrigins() {
        const data = await oemOriginRepository.find()

        return data
    }

    static async addOemOrigin(data: OemOriginDto) {
        const entity = await oemOriginRepository.save(
            oemOriginRepository.create(data)
        )

        return {
            data: entity
        }
    }

    static async updateOemOrigin(data: OemOriginUpdateDto) {
        const entity = await oemOriginRepository.update({ id: data.id }, data)

        return {
            data: entity
        }
    }

    static async deleteOemOrigin(data: OemOriginDeleteDto) {
        const entity = await oemOriginRepository.softDelete({ id: data.id })

        return {
            data: entity
        }
    }
}