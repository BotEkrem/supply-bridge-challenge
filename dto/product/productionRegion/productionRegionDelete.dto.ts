import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class ProductionRegionDeleteDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['ProductionRegion', "id"], {
        message:
            'A region with that id not exist.',
    })
    id: number
}