import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { ProductionRegionDto } from './productionRegion.dto';

export class ProductionRegionUpdateDto extends ProductionRegionDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['ProductionRegion', "id"], {
        message:
            'A region with that id not exist.',
    })
    id: number
}