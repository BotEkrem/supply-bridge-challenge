import { PropulsionDto } from "@/dto/product/propulsion/propulsion.dto";
import { AppDataSource } from "@/db/data-source";
import { Propulsion } from "@/entities/propulsion.entity";
import { PropulsionUpdateDto } from "@/dto/product/propulsion/propulsionUpdate.dto";
import { PropulsionDeleteDto } from "@/dto/product/propulsion/propulsionDelete.dto";

const propulsionRepository = AppDataSource.getRepository(Propulsion)

export class PropulsionService {
    static async getPropulsions() {
        const data = await propulsionRepository.find()

        return data
    }

    static async addPropulsion(data: PropulsionDto) {
        const entity = await propulsionRepository.save(
            propulsionRepository.create(data)
        )

        return {
            data: entity
        }
    }

    static async updatePropulsion(data: PropulsionUpdateDto) {
        const entity = await propulsionRepository.update({ id: data.id }, data)

        return {
            data: entity
        }
    }

    static async deletePropulsion(data: PropulsionDeleteDto) {
        const entity = await propulsionRepository.softDelete({ id: data.id })

        return {
            data: entity
        }
    }
}