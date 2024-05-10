import { Validate } from 'class-validator';
import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class ModelDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Brand', "id"], {
        message:
            'A brand with that id not exist.',
    })
    brandId: number
}