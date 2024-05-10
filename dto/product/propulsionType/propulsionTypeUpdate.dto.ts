import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { PropulsionTypeDto } from './propulsionType.dto';

export class PropulsionTypeUpdateDto extends PropulsionTypeDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['PropulsionType', "id"], {
        message:
            'A PropulsionType with that id not exist.',
    })
    id: number
}