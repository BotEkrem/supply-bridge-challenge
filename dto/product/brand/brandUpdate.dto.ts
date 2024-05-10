import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { BrandDto } from './brand.dto';

export class BrandUpdateDto extends BrandDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Brand', "id"], {
        message:
            'A brand with that id not exist.',
    })
    id: number
}