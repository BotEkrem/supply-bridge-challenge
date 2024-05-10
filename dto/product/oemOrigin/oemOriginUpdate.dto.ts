import { IsNumber, Validate } from 'class-validator';
import { IsNotEmpty } from "class-validator";
import { IsExist } from '@/misc/validators/isExists.validator';
import { OemOriginDto } from './oemOrigin.dto';

export class OemOriginUpdateDto extends OemOriginDto {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsExist, ['OemOrigin', "id"], {
        message:
            'An origin with that id not exist.',
    })
    id: number
}