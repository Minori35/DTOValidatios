import { IsString, isString } from "class-validator";

export class CreateCardDTO{

    // id: string;

    @IsString({message: `The brand most be a cool string`})
    readonly brand : string;

    @IsString()
    readonly model : string;
}