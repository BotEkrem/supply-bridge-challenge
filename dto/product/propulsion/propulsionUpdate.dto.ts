import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { PropulsionDto } from './propulsion.dto';

export class PropulsionUpdateDto extends PropulsionDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Propulsion', "id"], {
        message:
            'A propulsion with that id not exist.',
    })
    id: number
}