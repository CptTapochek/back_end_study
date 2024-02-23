import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: "andreib@nextlogic.ro", description: "Email"})
    readonly email: string;

    @ApiProperty({example: "**********", description: "Password"})
    readonly password: string;

    @ApiProperty({example: "CLIENT", description: "User role"})
    readonly role: string;
}