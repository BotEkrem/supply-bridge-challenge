import {Validate} from 'class-validator';
import {IsNotEmpty, IsString, IsNumber} from "class-validator";
import {IsExist} from '@/misc/validators/isExists.validator';


export class ProductDto {
    @IsString()
    @IsNotEmpty()
    idOEM: string;

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['OemOrigin', "id"], {
        message:
            'A OemOrigin with that id not exist.',
    })
    oemOriginId: number;

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['ProductionRegion', "id"], {
        message:
            'A ProductionRegion with that id not exist.',
    })
    productionRegionId: number;

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Maker', "id"], {
        message:
            'A Maker with that id not exist.',
    })
    makerId: number;

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Brand', "id"], {
        message:
            'A Brand with that id not exist.',
    })
    brandId: number;

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Model', "id"], {
        message:
            'A Model with that id not exist.',
    })
    modelId: number;

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['VehicleType', "id"], {
        message:
            'A VehicleType with that id not exist.',
    })
    vehicleTypeId: number;

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Propulsion', "id"], {
        message:
            'A Propulsion with that id not exist.',
    })
    propulsionId: number;

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['PropulsionType', "id"], {
        message:
            'A PropulsionType with that id not exist.',
    })
    propulsionTypeId: number;

    @IsString()
    @IsNotEmpty()
    vehicleProductionCountry: string;

    @IsString()
    @IsNotEmpty()
    modelYear: string;

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Supplier', "id"], {
        message:
            'A Supplier with that id not exist.',
    })
    supplierId: number;

    @IsString()
    @IsNotEmpty()
    L0: string;

    @IsString()
    @IsNotEmpty()
    L1: string;

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['ComponentCategory', "id"], {
        message:
            'A ComponentCategory with that id not exist.',
    })
    componentCategoryId: number;

    @IsString()
    @IsNotEmpty()
    productName: string;

    @IsString()
    @IsNotEmpty()
    additionalInformations: string;
}