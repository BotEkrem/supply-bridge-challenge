import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class ModelDeleteDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Model', "id"], {
        message:
            'A model with that id not exist.',
    })
    id: number
}