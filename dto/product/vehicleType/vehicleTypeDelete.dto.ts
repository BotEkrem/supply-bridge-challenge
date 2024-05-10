import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class VehicleTypeDeleteDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['VehicleType', "id"], {
        message:
            'A vehicleType with that id not exist.',
    })
    id: number
}