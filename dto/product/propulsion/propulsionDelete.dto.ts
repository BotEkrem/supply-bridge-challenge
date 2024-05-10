import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class PropulsionDeleteDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Propulsion', "id"], {
        message:
            'A propulsion with that id not exist.',
    })
    id: number
}