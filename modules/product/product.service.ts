import {ProductDto} from "@/dto/product/product/product.dto";
import {AppDataSource} from "@/db/data-source";
import {Product} from "@/entities/product.entity";
import {ProductUpdateDto} from "@/dto/product/product/productUpdate.dto";
import {ProductDeleteDto} from "@/dto/product/product/productDelete.dto";

const productRepository = AppDataSource.getRepository(Product)

export class ProductService {
    static async getProducts() {
        const data = await productRepository.find({
            relations: [
                "oemOrigin",
                "productionRegion",
                "maker",
                "brand",
                "model",
                "vehicleType",
                "propulsion",
                "propulsionType",
                "supplier",
                "componentCategory",
            ]
        })

        return data
    }

    static async addProduct(data: ProductDto) {
        const entity = await productRepository.save(
            productRepository.create({
                idOEM: data.idOEM,
                oemOrigin: {id: data.oemOriginId},
                productionRegion: {id: data.productionRegionId},
                maker: {id: data.makerId},
                brand: {id: data.brandId},
                model: {id: data.modelId},
                vehicleType: {id: data.vehicleTypeId},
                propulsion: {id: data.propulsionId},
                propulsionType: {id: data.propulsionTypeId},
                vehicleProductionCountry: data.vehicleProductionCountry,
                modelYear: data.modelYear,
                supplier: {id: data.supplierId},
                L0: data.L0,
                L1: data.L1,
                componentCategory: {id: data.componentCategoryId},
                productName: data.productName,
                additionalInformations: data.additionalInformations
            })
        )

        return {
            data: entity
        }
    }

    static async updateProduct(data: ProductUpdateDto) {
        const entity = await productRepository.update({id: data.id}, {
            idOEM: data.idOEM,
            oemOrigin: {id: data.oemOriginId},
            productionRegion: {id: data.productionRegionId},
            maker: {id: data.makerId},
            brand: {id: data.brandId},
            model: {id: data.modelId},
            vehicleType: {id: data.vehicleTypeId},
            propulsion: {id: data.propulsionId},
            propulsionType: {id: data.propulsionTypeId},
            vehicleProductionCountry: data.vehicleProductionCountry,
            modelYear: data.modelYear,
            supplier: {id: data.supplierId},
            L0: data.L0,
            L1: data.L1,
            componentCategory: {id: data.componentCategoryId},
            productName: data.productName,
            additionalInformations: data.additionalInformations
        })

        return {
            data: entity
        }
    }

    static async deleteProduct(data: ProductDeleteDto) {
        const entity = await productRepository.softDelete({id: data.id})

        return {
            data: entity
        }
    }
}