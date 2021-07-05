import { Module } from '@nestjs/common';
import { BoardsService } from './board.service';
import { BoardsController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.model';

@Module({
    imports: [TypeOrmModule.forFeature([Board])],
    providers: [BoardsService],
    controllers: [BoardsController],
})
export class BoardModule { }