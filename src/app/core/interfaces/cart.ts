import { Prod } from "./Prod";

export class cart implements Prod{
    id: number
    ProdName: string
    Price: number
    Category:string
    img: string 
    quantity :Number = 1
}   