import { Controller, Get, Post, Body, Param, Put, Delete, ValidationPipe, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post("/create")
  async createUser(@Body(new ValidationPipe()) userDto: User): Promise<User> {
    try {
      return await this.appService.createUser(userDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get("/getAllData")
  async getAllUsers(): Promise<User[]> {
    return this.appService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.appService.getUserById(id);
  }

  @Put(':id')
  async updateUserById(@Param('id') id: string, @Body(new ValidationPipe()) userDto: User): Promise<User> {
    try {
      return await this.appService.updateUserById(id, userDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: string): Promise<User> {
    return this.appService.deleteUserById(id);
  }
}
