"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_data_dto_1 = require("./dto/user-data.dto");
const user_service_1 = require("./user.service");
const task_service_1 = require("../tasks/task.service");
const user_model_1 = require("./user.model");
let UsersController = class UsersController {
    async getAllUsers(res) {
        const users = await user_service_1.getAllUsers();
        return res.status(common_1.HttpStatus.OK).send(users.map(user_model_1.User.toResponse));
    }
    ;
    async getUserById(res, id) {
        const user = await user_service_1.getById(id);
        return user ? res.status(common_1.HttpStatus.OK).send(user_model_1.User.toResponse(user)) : res.status(common_1.HttpStatus.NOT_FOUND).send();
    }
    ;
    async createUser(res, body) {
        const newUser = new user_model_1.User(body);
        const userCreated = await user_service_1.addUser(newUser);
        return userCreated ? res.status(common_1.HttpStatus.CREATED).send(user_model_1.User.toResponse(newUser)) : res.status(common_1.HttpStatus.BAD_REQUEST).send();
    }
    ;
    async updateUserById(res, id, body) {
        const newUser = new user_model_1.User(body);
        const userUpdated = await user_service_1.updateUser(id, newUser);
        return userUpdated ? res.status(common_1.HttpStatus.OK).send(userUpdated) : res.status(common_1.HttpStatus.BAD_REQUEST).send();
    }
    ;
    async deleteUserById(res, id) {
        const userDeleted = await user_service_1.deleteUser(id);
        task_service_1.removeTaskByUserId(id);
        return userDeleted ? res.status(common_1.HttpStatus.NO_CONTENT).send() : res.status(common_1.HttpStatus.NOT_FOUND).send();
    }
    ;
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_data_dto_1.UserDataDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, user_data_dto_1.UserDataDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserById", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserById", null);
UsersController = __decorate([
    common_1.Controller('users')
], UsersController);
exports.UsersController = UsersController;
;
//# sourceMappingURL=user.controller.js.map