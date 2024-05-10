import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { ProductDto } from './product.dto';

export class ProductUpdateDto extends ProductDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Product', "id"], {
        message:
            'A product with that id not exist.',
    })
    id: number
}