import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { SupplierDto } from './supplier.dto';

export class SupplierUpdateDto extends SupplierDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Supplier', "id"], {
        message:
            'A supplier with that id not exist.',
    })
    id: number
}