import { Pet } from "./pet"

export interface Owner{
    id:number
    name:string,
    lastName:string,
    city: string,
    birthday: Date,
    pets: Pet[]
}