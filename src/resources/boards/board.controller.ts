import { Controller, Res, Get, Post, Put, Delete, Param, Body, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { BoardDataDto } from './dto/board-data.dto';
import { BoardsService } from './board.service';
import { Board } from './board.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { sleep } from '../../tools/tools';


@Controller('boards')
@UseGuards(JwtAuthGuard)
export class BoardsController {
    constructor(
        private readonly boardsService: BoardsService
    ) { };

    @Get()
    async getAllBoards(@Res() res: Response) {
        await sleep(20);

        const boards = await this.boardsService.getAllBoards();
        return res.status(HttpStatus.OK).send(boards);
    };

    @Get(':id')
    async getBoardById(@Res() res: Response, @Param('id') id: string) {
        await sleep(20);

        const board = await this.boardsService.getById(id);
        return board ? res.status(HttpStatus.OK).send(board) : res.status(HttpStatus.NOT_FOUND).send();
    };

    @Post()
    async createBoard(@Res() res: Response, @Body() body: BoardDataDto) {
        await sleep(20);

        const newBoard = new Board(body);
        const boardCreated = await this.boardsService.addBoard(newBoard);
        return boardCreated ? res.status(HttpStatus.CREATED).send(newBoard) : res.status(HttpStatus.BAD_REQUEST).send();
    };

    @Put(':id')
    async updateBoardById(@Res() res: Response, @Param('id') id: string, @Body() body: BoardDataDto) {
        await sleep(20);

        await this.boardsService.getById(id);

        const newBoard = new Board(body);
        delete newBoard.columns;
        const boardUpdated = await this.boardsService.updateBoard(id, newBoard);
        return boardUpdated ? res.status(HttpStatus.OK).send(newBoard) : res.status(HttpStatus.BAD_REQUEST).send();
    };

    @Delete(':id')
    async deleteBoardById(@Res() res: Response, @Param('id') id: string) {
        await sleep(20);

        const boardExists = Boolean(await this.boardsService.getById(id));
        if (boardExists) this.boardsService.deleteBoard(id); // Delete board
        return boardExists ? res.status(HttpStatus.NO_CONTENT).send() : res.status(HttpStatus.NOT_FOUND).send();
    };

};