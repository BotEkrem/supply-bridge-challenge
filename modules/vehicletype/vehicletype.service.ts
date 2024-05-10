import { VehicleTypeDto } from "@/dto/product/vehicleType/vehicleType.dto";
import { AppDataSource } from "@/db/data-source";
import { VehicleType } from "@/entities/vehicleType.entity";
import { VehicleTypeUpdateDto } from "@/dto/product/vehicleType/vehicleTypeUpdate.dto";
import { VehicleTypeDeleteDto } from "@/dto/product/vehicleType/vehicleTypeDelete.dto";

const vehicleTypeRepository = AppDataSource.getRepository(VehicleType)

export class VehicleTypeService {
    static async getVehicleTypes() {
        const data = await vehicleTypeRepository.find()

        return data
    }

    static async addVehicleType(data: VehicleTypeDto) {
        const entity = await vehicleTypeRepository.save(
            vehicleTypeRepository.create(data)
        )

        return {
            data: entity
        }
    }

    static async updateVehicleType(data: VehicleTypeUpdateDto) {
        const entity = await vehicleTypeRepository.update({ id: data.id }, data)

        return {
            data: entity
        }
    }

    static async deleteVehicleType(data: VehicleTypeDeleteDto) {
        const entity = await vehicleTypeRepository.softDelete({ id: data.id })

        return {
            data: entity
        }
    }
}