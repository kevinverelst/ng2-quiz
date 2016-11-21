/**
 * Created by kevin on 21/11/2016.
 */
import {Component, OnInit} from '@angular/core';
import '../../public/css/styles.css';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    private _userService:UserService;
    private _data: Observable<User[]>;
    public users: User[];
    private _finished: boolean;

    constructor(UserService: UserService){
        this._userService = UserService;
        this.users = [];
    }

    ngOnInit() {
        this._data = this._userService.getUsers();
        let subscription = this._data.subscribe(
            (value: User) => this.users.push(value),
            error => console.log('error'),
            () => this._finished = true
        );
    }
}
