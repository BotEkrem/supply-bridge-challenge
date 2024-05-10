import { SupplierDto } from "@/dto/product/supplier/supplier.dto";
import { AppDataSource } from "@/db/data-source";
import { Supplier } from "@/entities/supplier.entity";
import { SupplierUpdateDto } from "@/dto/product/supplier/supplierUpdate.dto";
import { SupplierDeleteDto } from "@/dto/product/supplier/supplierDelete.dto";

const supplierRepository = AppDataSource.getRepository(Supplier)

export class SupplierService {
    static async getSuppliers() {
        const data = await supplierRepository.find()

        return data
    }

    static async addSupplier(data: SupplierDto) {
        const entity = await supplierRepository.save(
            supplierRepository.create(data)
        )

        return {
            data: entity
        }
    }

    static async updateSupplier(data: SupplierUpdateDto) {
        const entity = await supplierRepository.update({ id: data.id }, data)

        return {
            data: entity
        }
    }

    static async deleteSupplier(data: SupplierDeleteDto) {
        const entity = await supplierRepository.softDelete({ id: data.id })

        return {
            data: entity
        }
    }
}