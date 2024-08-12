import { IsNotEmpty, IsOptional, IsString, IsEmail } from "class-validator";

export class DeleteUserDtoResponse {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  status: string;
}
