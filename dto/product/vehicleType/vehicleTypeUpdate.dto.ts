import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { VehicleTypeDto } from './vehicleType.dto';

export class VehicleTypeUpdateDto extends VehicleTypeDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['VehicleType', "id"], {
        message:
            'A vehicleType with that id not exist.',
    })
    id: number
}