import {User} from "../models/user";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

export class UserService {
    private _http:Http;

    constructor(http:Http) {
        this._http = http;

    }

    getUsers():Observable<User[]> {
        return this._http.get('../../data/users.json')
            .map((res:Response) => <User[]>res.json())
    }
}