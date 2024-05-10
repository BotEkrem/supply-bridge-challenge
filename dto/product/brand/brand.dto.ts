import { Validate } from 'class-validator';
import { IsNotEmpty, IsString } from "class-validator";
import { IsNotExist } from "@/misc/validators/isNotExists.validator";

export class BrandDto {
    @IsString()
    @IsNotEmpty()
    @Validate(IsNotExist, ['Brand'], {
        message:
            'A brand with that name already exists. Please check the information for accuracy or enter a different name.',
    })
    name: string
}