import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class SupplierDeleteDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Supplier', "id"], {
        message:
            'A supplier with that id not exist.',
    })
    id: number
}