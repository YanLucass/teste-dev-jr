import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class CreateUserDtoResponse {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty({ message: "Informe o nome do usuário" })
  @IsString({ message: "O nome deve ser uma string" })
  nomeCompleto?: string;

  @IsNotEmpty({ message: "Informe o email do usuário" })
  @IsEmail({}, { message: "E-mail inválido" })
  email?: string;

  @IsNotEmpty()
  status: string;
}
