import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class PropulsionTypeDeleteDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['PropulsionType', "id"], {
        message:
            'A PropulsionType with that id not exist.',
    })
    id: number
}