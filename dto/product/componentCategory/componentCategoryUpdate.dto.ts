import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { ComponentCategoryDto } from './componentCategory.dto';

export class ComponentCategoryUpdateDto extends ComponentCategoryDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['ComponentCategory', "id"], {
        message:
            'A componentCategory with that id not exist.',
    })
    id: number
}