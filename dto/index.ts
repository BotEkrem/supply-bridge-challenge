import { LoginDto } from "./auth/login.dto";
import { RegisterDto } from "./auth/register.dto";
import { OemOriginDto } from "./product/oemOrigin/oemOrigin.dto";
import { OemOriginDeleteDto } from "./product/oemOrigin/oemOriginDelete.dto";
import { OemOriginUpdateDto } from "./product/oemOrigin/oemOriginUpdate.dto";
import { ProductionRegionDto } from "./product/productionRegion/productionRegion.dto";
import { ProductionRegionDeleteDto } from "./product/productionRegion/productionRegionDelete.dto";
import { ProductionRegionUpdateDto } from "./product/productionRegion/productionRegionUpdate.dto";
import { BrandDto } from "./product/brand/brand.dto";
import { BrandDeleteDto } from "./product/brand/brandDelete.dto";
import { BrandUpdateDto } from "./product/brand/brandUpdate.dto";
import { VehicleTypeDto } from "./product/vehicleType/vehicleType.dto";
import { VehicleTypeDeleteDto } from "./product/vehicleType/vehicleTypeDelete.dto";
import { VehicleTypeUpdateDto } from "./product/vehicleType/vehicleTypeUpdate.dto";
import { PropulsionDto } from "./product/propulsion/propulsion.dto";
import { PropulsionDeleteDto } from "./product/propulsion/propulsionDelete.dto";
import { PropulsionUpdateDto } from "./product/propulsion/propulsionUpdate.dto";
import { ComponentCategoryDto } from "./product/componentCategory/componentCategory.dto";
import { ComponentCategoryDeleteDto } from "./product/componentCategory/componentCategoryDelete.dto";
import { ComponentCategoryUpdateDto } from "./product/componentCategory/componentCategoryUpdate.dto";
import { ModelDto } from "./product/model/model.dto";
import { ModelDeleteDto } from "./product/model/modelDelete.dto";
import { ModelUpdateDto } from "./product/model/modelUpdate.dto";
import { MakerDto } from "./product/maker/maker.dto";
import { MakerDeleteDto } from "./product/maker/makerDelete.dto";
import { MakerUpdateDto } from "./product/maker/makerUpdate.dto";
import { PropulsionTypeDto } from "./product/propulsionType/propulsionType.dto";
import { PropulsionTypeDeleteDto } from "./product/propulsionType/propulsionTypeDelete.dto";
import { PropulsionTypeUpdateDto } from "./product/propulsionType/propulsionTypeUpdate.dto";
import { SupplierDto } from "./product/supplier/supplier.dto";
import { SupplierDeleteDto } from "./product/supplier/supplierDelete.dto";
import { SupplierUpdateDto } from "./product/supplier/supplierUpdate.dto";
import {ProductDto} from "@/dto/product/product/product.dto";
import {ProductDeleteDto} from "@/dto/product/product/productDelete.dto";
import {ProductUpdateDto} from "@/dto/product/product/productUpdate.dto";

export const dtos = {
    "login": LoginDto,
    "register": RegisterDto,
    "oemorigin": OemOriginDto,
    "oemoriginupdate": OemOriginUpdateDto,
    "oemorigindelete": OemOriginDeleteDto,
    "productionregion": ProductionRegionDto,
    "productionregionupdate": ProductionRegionUpdateDto,
    "productionregiondelete": ProductionRegionDeleteDto,
    "brand": BrandDto,
    "brandupdate": BrandUpdateDto,
    "branddelete": BrandDeleteDto,
    "vehicletype": VehicleTypeDto,
    "vehicletypeupdate": VehicleTypeUpdateDto,
    "vehicletypedelete": VehicleTypeDeleteDto,
    "propulsion": PropulsionDto,
    "propulsionupdate": PropulsionUpdateDto,
    "propulsiondelete": PropulsionDeleteDto,
    "componentcategory": ComponentCategoryDto,
    "componentcategoryupdate": ComponentCategoryUpdateDto,
    "componentcategorydelete": ComponentCategoryDeleteDto,
    "model": ModelDto,
    "modeldelete": ModelDeleteDto,
    "modelupdate": ModelUpdateDto,
    "maker": MakerDto,
    "makerdelete": MakerDeleteDto,
    "makerupdate": MakerUpdateDto,
    "propulsiontype": PropulsionTypeDto,
    "propulsiontypedelete": PropulsionTypeDeleteDto,
    "propulsiontypeupdate": PropulsionTypeUpdateDto,
    "supplier": SupplierDto, 
    "supplierdelete": SupplierDeleteDto, 
    "supplierupdate": SupplierUpdateDto,
    "product": ProductDto,
    "productdelete": ProductDeleteDto,
    "productupdate": ProductUpdateDto
}