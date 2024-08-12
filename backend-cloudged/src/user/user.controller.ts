import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/createUserDto";
import { UpdateUserDto } from "./dto/updateUserDto";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUser(): Promise<any> {
    return this.userService.findAllUser();
  }

  @Get("/:id")
  getUser(@Param("id") id: number): Promise<any> {
    return this.userService.findUserById(id);
  }

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<any> {
    try {
      return this.userService.createUser(body);
    } catch (e) {
      throw new HttpException(e.message || e.response, e.status || 500);
    }
  }

  @Put("/:id")
  async updateUser(
    @Param("id") id: number,
    @Body() body: UpdateUserDto
  ): Promise<any> {
    try {
      return this.userService.userUpdate(id, body);
    } catch (e) {
      throw new HttpException(e.message || e.response, e.status || 500);
    }
  }
  @Delete("/:id")
  async deleteUser(@Param("id") id: number): Promise<any> {
    try {
      return this.userService.deleteUser(id);
    } catch (e) {
      throw new HttpException(e.message || e.response, e.status || 500);
    }
  }
}
