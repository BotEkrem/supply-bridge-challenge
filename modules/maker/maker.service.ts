import { MakerDto } from "@/dto/product/maker/maker.dto";
import { AppDataSource } from "@/db/data-source";
import { Maker } from "@/entities/maker.entity";
import { MakerUpdateDto } from "@/dto/product/maker/makerUpdate.dto";
import { MakerDeleteDto } from "@/dto/product/maker/makerDelete.dto";

const makerRepository = AppDataSource.getRepository(Maker)

export class MakerService {
    static async getMakers() {
        const data = await makerRepository.find({relations: ["brand"]})

        return data
    }

    static async addMaker(data: MakerDto) {
        const entity = await makerRepository.save(
            makerRepository.create({...data, brand: { id: data.brandId }})
        )

        return {
            data: entity
        }
    }

    static async updateMaker(data: MakerUpdateDto) {
        const {brandId, ...parsedData} = data
        const entity = await makerRepository.update({ id: data.id }, {...parsedData, brand: { id: brandId }})

        return {
            data: entity
        }
    }

    static async deleteMaker(data: MakerDeleteDto) {
        const entity = await makerRepository.softDelete({ id: data.id })

        return {
            data: entity
        }
    }
}