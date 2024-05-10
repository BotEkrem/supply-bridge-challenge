import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { AppDataSource } from '@/db/data-source';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';

@ValidatorConstraint({ name: 'IsExist', async: true })
export class IsExist implements ValidatorConstraintInterface {
    async validate(value: string, validationArguments: ValidationArguments) {
        const repository = validationArguments.constraints[0];
        const pathToProperty = validationArguments.constraints[1];
        const entity: unknown = await AppDataSource
            .getRepository(repository)
            .findOne({
                where: {
                    [pathToProperty ? pathToProperty : validationArguments.property]:
                        value,
                },
            });
        return Boolean(entity);
    }
}