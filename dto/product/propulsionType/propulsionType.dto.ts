import { Validate } from 'class-validator';
import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class PropulsionTypeDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Propulsion', "id"], {
        message:
            'A propulsion with that id not exist.',
    })
    propulsionId: number
}