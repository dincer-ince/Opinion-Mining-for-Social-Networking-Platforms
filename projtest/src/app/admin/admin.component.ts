import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LogerService } from '../_services/loger.service';
import { PostService } from '../_services/post.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public userService: UserService, public postService: PostService, 
              public logerService: LogerService, public router: Router, 
              private toastr: ToastrService) { }

  currentTable: string;
  currentUsername: string;
  isShowUserData: boolean = false;

  ngOnInit(): void {
    console.log(this.userService.users);
    this.currentTable = "user";
  }

  currentToUser() {
    this.currentTable = "user";
  }

  currentToPost() {
    this.currentTable = "post";
  }

  currentToLog() {
    this.currentTable = "log";
  }

  deletePost(postTitle: string) {
    for(let i=0; i<this.postService.postas.length; i++){
      if(postTitle.match(this.postService.postas[i].postTitle)){
        this.postService.postas.splice(i,1);
      }
    }
  }

  showUserData(username: string) {
    this.currentUsername  = username;
    console.log(this.currentUsername);
    this.isShowUserData = true;
  }

  hideUserData() {
    localStorage.clear();
    this.isShowUserData = false;
  }

  deleteUser() {
    if(confirm("Delete this user?")){
      for(let i=0; i<this.userService.users.length; i++){
        if(this.userService.users[i]!=null && this.currentUsername.match(this.userService.users[i].Username)){
          console.log(this.userService.users[i]);
          this.userService.users.splice(i,1);
          this.toastr.info(this.currentUsername +" has deleted", "User deleted succesfully!");
        }
      }
      this.isShowUserData = false;
      console.log(this.userService.users);
    }
  }
}
