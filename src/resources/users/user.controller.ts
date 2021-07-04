import { Controller, Res, Get, Post, Put, Delete, Param, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UserDataDto } from './dto/user-data.dto';
import { getAllUsers, getById, addUser, updateUser, deleteUser } from './user.service';
import { removeTaskByUserId } from '../tasks/task.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {

    @Get()
    async getAllUsers(@Res() res: Response) {
        const users = await getAllUsers();
        return res.status(HttpStatus.OK).send(users.map(User.toResponse));
    };

    @Get(':id')
    async getUserById(@Res() res: Response, @Param('id') id: string) {
        const user = await getById(id);
        return user ? res.status(HttpStatus.OK).send(User.toResponse(user)) : res.status(HttpStatus.NOT_FOUND).send();
    };

    @Post()
    async createUser(@Res() res: Response, @Body() body: UserDataDto) {
        const newUser = new User(body);
        const userCreated = await addUser(newUser);
        return userCreated ? res.status(HttpStatus.CREATED).send(User.toResponse(newUser)) : res.status(HttpStatus.BAD_REQUEST).send();
    };

    @Put(':id')
    async updateUserById(@Res() res: Response, @Param('id') id: string, @Body() body: UserDataDto) {
        const newUser = new User(body);
        const userUpdated = await updateUser(id, newUser);
        return userUpdated ? res.status(HttpStatus.OK).send(userUpdated) : res.status(HttpStatus.BAD_REQUEST).send();
    };

    @Delete(':id')
    async deleteUserById(@Res() res: Response, @Param('id') id: string) {
        const userDeleted = await deleteUser(id); // Delete user
        removeTaskByUserId(id); // Remove this user ID from all tasks
        return userDeleted ? res.status(HttpStatus.NO_CONTENT).send() : res.status(HttpStatus.NOT_FOUND).send();
    };

};