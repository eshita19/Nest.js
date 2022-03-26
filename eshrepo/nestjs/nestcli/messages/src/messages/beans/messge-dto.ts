import {Length} from 'class-validator';

export class Message{
    @Length(5, 10)
    content:string;
}