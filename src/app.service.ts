import { Injectable } from '@nestjs/common';
import { User, UserDocument } from "./user.models";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ) { }

  // creating a user 
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
  // getting all users
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // getting a user by id
  async getUserById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  // updating a user by id
  async updateUserById(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  // deleting a user by id
  async deleteUserById(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }



}
