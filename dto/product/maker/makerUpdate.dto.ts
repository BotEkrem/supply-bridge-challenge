import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { MakerDto } from './maker.dto';

export class MakerUpdateDto extends MakerDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['Maker', "id"], {
        message:
            'A maker with that id not exist.',
    })
    id: number
}