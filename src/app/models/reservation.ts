import { Client } from "./client";
import { Room } from "./room";


export class Reservation {
    idReservation: number;
    startDate: Date = new Date();        
    score: string;
    devolutionDate: Date = new Date();        
    status: string;
    client: Client = new Client();
    room: Room = new Room();
 
}
