import { Injectable, Inject, HttpException, HttpStatus } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/createUserDto";
import "dotenv/config";
import { UpdateUserDto } from "./dto/updateUserDto";
import { UpdateUserDtoResponse } from "./dto/updateUserDtoResponse";
import { DeleteUserDtoResponse } from "./dto/deleteUserDtoResponse";
import { CreateUserDtoResponse } from "./dto/createUserDtoResponse";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>
  ) {}

  async findAllUser(): Promise<User[]> {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      throw new HttpException(
        "Falha ao recuperar usuários",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findUserById(id: number): Promise<any> {
    try {
      const userFound = await this.userRepository.findOne({
        where: { id },
      });

      if (!userFound) {
        throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND);
      }
      return userFound;
    } catch (e) {
      console.error(e);
      throw new HttpException(
        `Erro ao recuperar usuario no PLSQL-d ${e.message}`,
        HttpStatus.NOT_FOUND
      );
    }
  }

  async createUser(user: CreateUserDto) {
    const userExists = await this.userRepository.findOne({
      where: { email: user.email },
    });

    if (userExists) {
      throw new HttpException(
        "Usuário já está cadastrado",
        HttpStatus.CONFLICT
      );
    }

    const userCreated = await this.userRepository.save(user);
    const newUserResponse: CreateUserDtoResponse = {
      ...userCreated,
      status: "Created",
    };
    return newUserResponse
  }

  async userUpdate(id: number, userUpdate: UpdateUserDto) {
   
    try {
      const userExists = await this.findUserById(id);

      await this.userRepository.update({ id: userExists.id }, userUpdate);

      const user: UpdateUserDtoResponse = {
        id,
        nomeCompleto: userUpdate?.nomeCompleto,
        email: userUpdate?.email,
        status: "Updated",
      };

      return user;
    } catch (e) {


      if (e.code && e.code === "23505") {
        throw new HttpException(
          "Esse email já está em uso",
          HttpStatus.CONFLICT
        );
      }

      throw new HttpException(e.response, e.status);
    }
  }

  async deleteUser(id: number): Promise<any> {
    const userExists = await this.userRepository.findOne({
      where: { id: id },
    });

    if (!userExists) {
      throw new HttpException("Usuário não cadastrado", HttpStatus.NOT_FOUND);
    }
    await this.userRepository.delete({ id: id });
    const deletedUser: DeleteUserDtoResponse = {
      id,
      status: "Deleted",
    };

    return deletedUser;
  }
}
