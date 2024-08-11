import { IsNotEmpty, IsOptional, IsString, IsEmail } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty({ message: "Informe o nome do usuário" })
  @IsString({ message: "O nome deve ser uma string" })
  nomeCompleto?: string;

  @IsOptional()
  @IsNotEmpty({ message: "Informe o email do usuário" })
  @IsEmail({}, { message: "E-mail inválido" })
  email?: string;
}
