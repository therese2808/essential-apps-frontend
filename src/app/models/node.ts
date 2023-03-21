import { Cam } from "./cam";
import { Moisture } from "./moisture";
import { Npk } from "./npk";
import { Temp } from "./temp";
import { User } from "./user";

export class Node {
    _id!:string;
    name!: string;
    user!:User[];
    temp!:Temp[];
    cam!:Cam[];
    npk!:Npk[];
    moisture!:Moisture
}
