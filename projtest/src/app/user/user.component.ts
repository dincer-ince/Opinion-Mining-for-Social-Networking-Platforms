import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService, private router: Router) { }


  ngOnInit(): void {
    (<HTMLFormElement>document.getElementById("register")).style.display = 'none';
    console.log(this.service.users);
    this.service.formModel_user.reset();
  }

  formLogin() {
    (<HTMLFormElement>document.getElementById("register")).style.display = 'none';
    (<HTMLFormElement>document.getElementById("login")).style.display = 'block';
  }

  formRegister() {
    (<HTMLFormElement>document.getElementById("login")).style.display = 'none';
    (<HTMLFormElement>document.getElementById("register")).style.display = 'block';
  }

  onSubmit() {
  }

  login() {  

    var body = {
      Email: this.service.formModel_user.value.Email,
      Password: this.service.formModel_user.value.Password
    };

    if(this.isUserMatch(body)){
      this.toastr.success('Login successful.');
      localStorage.setItem('user',body.Email );
      this.router.navigate(['/mainpage']);
      console.log(this.service.users);
    } else {
      this.toastr.error('Incorrect username or password','Login failed.');
      this.service.formModel_user.reset();
    }
  }

  register() {

    var body = {
      Username: this.service.formModel_user.value.Username,
      Email: this.service.formModel_user.value.Email,
      Password: this.service.formModel_user.value.Password,
    TotalPosted: 0
    };

    if(!this.isUserExists(body)){
      this.toastr.success('New user created!', 'Registration successful.');
      this.service.users.push(body);
      this.service.formModel_user.reset();
      this.formLogin();
      console.log(this.service.users);
    } else {
      this.toastr.error('User is already exists','Registration failed.');
      this.service.formModel_user.reset();
    }
  }

  isUserMatch(user: any) {

    for(let i = 0; i < this.service.users.length; i++){
      if (user.Email.match(this.service.users[i].Email) 
       && user.Password.match(this.service.users[i].Password)){
        return true;
      }
    }
    return false;
  }



  isUserExists(user: any) {

    for(let i = 0; i < this.service.users.length; i++){
      if (user.Username.match(this.service.users[i].Username)){
        return true;
      }
    }
    return false;
  }

}
