import {Component, OnInit} from '@angular/core';
import '../../public/css/styles.css';
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit {
    public users: User[];

    constructor(private userService: UserService) {
        this.users = [];
    }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(users => this.users = users,
                err => {
                    console.log(err);
                });
    }
}
