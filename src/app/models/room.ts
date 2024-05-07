import { Category } from "./category";

export class Room {
    id: number;
    description: string;
    hotel: string;
    name: string;
    stars: number;    
    category: Category = new Category();  
}

