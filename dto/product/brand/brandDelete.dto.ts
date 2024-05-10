import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class BrandDeleteDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Brand', "id"], {
        message:
            'A brand with that id not exist.',
    })
    id: number
}