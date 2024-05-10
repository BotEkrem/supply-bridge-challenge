import { Validate } from 'class-validator';
import { IsNotEmpty, IsString } from "class-validator";
import { IsNotExist } from "@/misc/validators/isNotExists.validator";

export class SupplierDto {
    @IsString()
    @IsNotEmpty()
    @Validate(IsNotExist, ['Supplier'], {
        message:
            'A supplier with that short name already exists. Please check the information for accuracy or enter a different name.',
    })
    shortName: string

    @IsString()
    @IsNotEmpty()
    @Validate(IsNotExist, ['Supplier'], {
        message:
            'A supplier with that long name already exists. Please check the information for accuracy or enter a different name.',
    })
    longName: string
}