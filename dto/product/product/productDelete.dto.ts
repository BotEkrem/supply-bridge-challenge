import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class ProductDeleteDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Product', "id"], {
        message:
            'A product with that id not exist.',
    })
    id: number
}