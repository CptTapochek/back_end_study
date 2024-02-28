import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: "andreib@nextlogic.ro", description: "Email"})
    @IsString({message: "Email have to be string value"})
    @IsEmail({}, {message: "Email format is not correct"})
    readonly email: string;

    @ApiProperty({example: "**********", description: "Password"})
    @IsString({message: "Password have to be string value"})
    @Length(4, 16, {message: "Password length must be between 4 and 16 characters."})
    readonly password: string;

    @ApiProperty({example: "CLIENT", description: "User role"})
    @IsString({message: "User role have to be string value"})
    readonly role: string;
}