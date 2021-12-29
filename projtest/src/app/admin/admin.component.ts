import { Component, OnInit } from '@angular/core';
import { LogerService } from '../_services/loger.service';
import { PostService } from '../_services/post.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public userService: UserService, public postService: PostService, public logerService: LogerService) { }

  currentTable: string;

  ngOnInit(): void {
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
        this.postService.postas[i] = null;
      }
    }
  }

  showUserData() {

  }

}
