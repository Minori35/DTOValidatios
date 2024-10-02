import { IsOptional, IsString, isString, IsUUID } from "class-validator";

export class UpdateCardDTO{
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({message: `The brand most be a cool string`})
    @IsOptional()
    readonly brand? : string;

    @IsString()
    @IsOptional()
    readonly model? : string;
}