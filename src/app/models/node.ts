import { Cam } from "./cam";
import { Moisture } from "./moisture";
import { Light } from "./light";
import { Temp } from "./temp";
import { User } from "./user";
import { Water } from "./water";
import { Fire } from "./fire";
import { Dht11 } from "./dht11";

export class Node {
    _id!:string;
    name!: string;
    user!:User[];
    temp!:Temp[];
    cam!:Cam[];
    ligth!:Light[];
    dht11!:Dht11[];
    fire!:Fire[];
    water!:Water[];
    moisture!:Moisture
}
