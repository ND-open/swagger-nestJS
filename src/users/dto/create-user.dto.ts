import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export enum UserRole {
    Admin = 'Admin',
    Moderator = 'Moderator',
    User = 'User'
}

export class CreateUserDto {
    id: number;

    @ApiProperty({
        example: 'firstname.lastname@gmail.com',
        required: true
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: '1234578910',
        required: true
    })
    @IsNotEmpty()
    @MinLength(10)
    password: string;

    @ApiProperty({ example: "Admin|Moderator|User" })
    role: UserRole;

}
