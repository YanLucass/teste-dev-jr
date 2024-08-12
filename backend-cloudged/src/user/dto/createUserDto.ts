import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "Informe o nome do usuário" })
  @IsString({ message: "O nome deve ser uma string" })
  nomeCompleto: string;

  @IsNotEmpty({ message: "Informe o email do usuário" })
  @IsEmail({}, { message: "E-mail inválido" })
  email: string;
}
