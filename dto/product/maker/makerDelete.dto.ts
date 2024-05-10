import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';

export class MakerDeleteDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Maker', "id"], {
        message:
            'A maker with that id not exist.',
    })
    id: number
}