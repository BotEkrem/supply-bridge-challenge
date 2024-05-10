import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { ModelDto } from './model.dto';

export class ModelUpdateDto extends ModelDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Model', "id"], {
        message:
            'A model with that id not exist.',
    })
    id: number
}