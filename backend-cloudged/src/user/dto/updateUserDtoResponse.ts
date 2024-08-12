import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class UpdateUserDtoResponse {
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
