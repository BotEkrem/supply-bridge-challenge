import { ComponentCategoryDto } from "@/dto/product/componentCategory/componentCategory.dto";
import { AppDataSource } from "@/db/data-source";
import { ComponentCategory } from "@/entities/componentCategory.entity";
import { ComponentCategoryUpdateDto } from "@/dto/product/componentCategory/componentCategoryUpdate.dto";
import { ComponentCategoryDeleteDto } from "@/dto/product/componentCategory/componentCategoryDelete.dto";

const componentCategoryRepository = AppDataSource.getRepository(ComponentCategory)

export class ComponentCategoryService {
    static async getComponentCategorys() {
        const data = await componentCategoryRepository.find()

        return data
    }

    static async addComponentCategory(data: ComponentCategoryDto) {
        const entity = await componentCategoryRepository.save(
            componentCategoryRepository.create(data)
        )

        return {
            data: entity
        }
    }

    static async updateComponentCategory(data: ComponentCategoryUpdateDto) {
        const entity = await componentCategoryRepository.update({ id: data.id }, data)

        return {
            data: entity
        }
    }

    static async deleteComponentCategory(data: ComponentCategoryDeleteDto) {
        const entity = await componentCategoryRepository.softDelete({ id: data.id })

        return {
            data: entity
        }
    }
}