import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class ComponentCategoryDeleteDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['ComponentCategory', "id"], {
        message:
            'A componentCategory with that id not exist.',
    })
    id: number
}