import { PropulsionTypeDto } from "@/dto/product/propulsionType/propulsionType.dto";
import { AppDataSource } from "@/db/data-source";
import { PropulsionType } from "@/entities/propulsionType.entity";
import { PropulsionTypeUpdateDto } from "@/dto/product/propulsionType/propulsionTypeUpdate.dto";
import { PropulsionTypeDeleteDto } from "@/dto/product/propulsionType/propulsionTypeDelete.dto";

const propulsionTypeRepository = AppDataSource.getRepository(PropulsionType)

export class PropulsionTypeService {
    static async getPropulsionTypes() {
        const data = await propulsionTypeRepository.find({relations: ["propulsion"]})

        return data
    }

    static async addPropulsionType(data: PropulsionTypeDto) {
        const entity = await propulsionTypeRepository.save(
            propulsionTypeRepository.create({...data, propulsion: { id: data.propulsionId }})
        )

        return {
            data: entity
        }
    }

    static async updatePropulsionType(data: PropulsionTypeUpdateDto) {
        const {propulsionId, ...parsedData} = data
        const entity = await propulsionTypeRepository.update({ id: data.id }, {...parsedData, propulsion: { id: propulsionId}})

        return {
            data: entity
        }
    }

    static async deletePropulsionType(data: PropulsionTypeDeleteDto) {
        const entity = await propulsionTypeRepository.softDelete({ id: data.id })

        return {
            data: entity
        }
    }
}