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

  isLogin: string = "";

  ngOnInit(): void {
    console.log(this.service.users);
    this.service.formModel_user.reset();
  }

  formLogin() {
    this.isLogin = "login";
    this.service.formModel_user.reset();
  }

  formRegister() {
    this.isLogin = "register";
    this.service.formModel_user.reset();
  }

  onSubmit() {

    var body = {
      Username: this.service.formModel_user.value.Username,
      Email: this.service.formModel_user.value.Email,
      Password: this.service.formModel_user.value.Password
    };

    if(this.isLogin=="login"){
      this.login(body);
    }
    else if(this.isLogin=="register"){
      this.register(body);
    }
    
  }

  login(newUser: any) {  

    if(this.isUserExists(newUser)){
      this.toastr.success('Login successful.');
      this.router.navigate(['/mainpage']);
      console.log(this.service.users);
    } else {
      this.toastr.error('Incorrect username or password','Login failed.');
      this.service.formModel_user.reset();
    }
  }

  register(newUser: any) {

    if(!this.isUserExists(newUser)){
      this.toastr.success('New user created!', 'Registration successful.');
      this.service.users.push(newUser);
      this.service.formModel_user.reset();
      console.log(this.service.users);
    } else {
      this.toastr.error('User is already exists','Registration failed.');
      this.service.formModel_user.reset();
    }
  }

  isUserExists(user: any) {

    for(let i = 0; i < this.service.users.length; i++){
      if (user.Email.match(this.service.users[i].Email) 
       && user.Password.match(this.service.users[i].Password)){
        return true;
      }
    }
    return false;
  }

}
