import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
@Injectable()
export class MessageRepository{

    async createMessage(message: string){
       const contents =  await readFile('messages.json', 'utf8');
       const messages = JSON.parse(contents);
       const id = Math.floor(Math.random() * 999);
       messages[id] = {id, message};
       writeFile('messages.json', JSON.stringify(messages)); 
    }
}