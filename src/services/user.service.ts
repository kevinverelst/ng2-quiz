import {User} from "../models/user";
import {Http, Response} from "@angular/http";
import {Observable, ReplaySubject} from "rxjs/Rx";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
    private _http: Http;
    public users: ReplaySubject<any> = new ReplaySubject(1);

    constructor(http: Http) {
        this._http = http;

    }

    getUsers(): Observable<User[]> {
        this._http.get('../../data/users.json')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        return this.users;
    }
}