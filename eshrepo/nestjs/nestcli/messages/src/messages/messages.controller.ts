import { Body, Controller, Get, Post } from '@nestjs/common';
import {Message} from './beans/messge-dto';
import { MessagesService } from './ messages.service';

@Controller('messages')
export class MessagesController {
    private messageService: MessagesService
    constructor(messageService:MessagesService){this.messageService = messageService;}
    @Get("")
    getMessages(){
        return {"message" : "Hello this is the message"};
    }

    @Post("")
    postMessage(@Body() message: Message){
        this.messageService.createMessage(message.content);
    }
}
