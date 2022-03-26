import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./messages.repository";

@Injectable()
export class MessagesService{
    private messageRepository: MessageRepository;
    constructor(messageRepository: MessageRepository){ this.messageRepository = messageRepository;}
    createMessage(content: string){
        this.messageRepository.createMessage(content);
    }
}