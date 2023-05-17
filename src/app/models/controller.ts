import { BehaviorSubject } from "rxjs";

export class Controller {
    fan!:BehaviorSubject<number>;
    pump!:BehaviorSubject<number>
}
