import { Controller, Res, Get, Post, Put, Delete, Param, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { BoardDataDto } from './dto/board-data.dto';
import { getAllBoards, getById, addBoard, updateBoard, deleteBoard } from './board.service';
import { deleteTasksByBoardId } from '../tasks/task.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {

    @Get()
    async getAllBoards(@Res() res: Response) {
        const boards = await getAllBoards();
        return res.status(HttpStatus.OK).send(boards);
    };

    @Get(':id')
    async getBoardById(@Res() res: Response, @Param('id') id: string) {
        const board = await getById(id);
        return board ? res.status(HttpStatus.OK).send(board) : res.status(HttpStatus.NOT_FOUND).send();
    };

    @Post()
    async createBoard(@Res() res: Response, @Body() body: BoardDataDto) {
        const newBoard = new Board(body);
        const boardCreated = await addBoard(newBoard);
        return boardCreated ? res.status(HttpStatus.CREATED).send(newBoard) : res.status(HttpStatus.BAD_REQUEST).send();
    };

    @Put(':id')
    async updateBoardById(@Res() res: Response, @Param('id') id: string, @Body() body: BoardDataDto) {
        const newBoard = new Board(body);
        const boardUpdated = await updateBoard(id, newBoard);
        return boardUpdated ? res.status(HttpStatus.OK).send(newBoard) : res.status(HttpStatus.BAD_REQUEST).send();
    };

    @Delete(':id')
    async deleteBoardById(@Res() res: Response, @Param('id') id: string) {
        const boardDeleted = await deleteBoard(id); // Delete board
        deleteTasksByBoardId(id); // Delete all dependent tasks
        return boardDeleted ? res.status(HttpStatus.NO_CONTENT).send() : res.status(HttpStatus.NOT_FOUND).send();
    };

};