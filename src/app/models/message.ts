import { Client } from "./client";
import { Room } from "./room";

export class Message {
    idMessage: number;
    messageText: string;
    client: Client = new Client();
    tool: Room = new Room();
}
