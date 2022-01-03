import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../_services/post.service';
import { User } from '../models/user.model';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(private fb:FormBuilder, public service: PostService,public userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.viewPosts= this.service.postas.slice();
    this.loadPosts();
    this.GetActiveUser();
  }

  formComment=this.fb.group({
    commentText:"",

  })
  
  mainMenuOpen:number=1;
  ActiveUser:User={
    Username: "Admin",
    Email: "filler",
    Password: "filler",
    TotalPosted: 0,
    role:""
  };

  formPost=this.fb.group({
    postTopic:"",
    postContent: "",
    postOwner: this.ActiveUser.Username,
    postTitle: "",
    postComments:[this.service.rndComments[0],this.service.rndComments[2]], 
  })

  

  Post: Post = {
    postTopic: "",
    postContent: "filler",
    postOwner: "filler",
    postTitle: "funny words",
    postComments: [this.service.rndComments[1],this.service.rndComments[5]],
    postVotes: 123
  };
  
  viewPosts:Post[];


  GetActiveUser(){
    console.log("asd")
    var bos=localStorage.getItem("user");
    this.userService.users.forEach(element => {
      if(element.Email==bos) this.ActiveUser=element;
    });
    
  }
  num:number;
  RandomNumber(){
    this.num= Math.floor(Math.random() * (25 - 1) + 1);
    console.log(this.num)
  }

  createPost(){
    this.service.postas.push({
      postTopic: this.formPost.value.postTopic,
      postContent: this.formPost.value.postContent,
      postOwner: this.ActiveUser.Username,
      postTitle: this.formPost.value.postTitle,
      postComments: [this.service.rndComments[6]],
      postVotes: 1
    })
    console.log(this.formPost)
    this.mainMenuOpen=1;
    this.sortByNew();
    this.toastr.success("Post has been successfully created.")
    this.ActiveUser.TotalPosted++;
  }
  

  loadPosts() {
    
    this.sortByNew()
  }
  sortByNew() {
    this.viewPosts= this.service.postas.slice();
    this.viewPosts.reverse();
  }
  sortByBest(){
    this.viewPosts= this.service.postas.slice();
    this.viewPosts.sort((a, b) => (a.postVotes > b.postVotes ? -1 : 1))
  }

  createComment(){
    
    var tempComment:Comment={votes:1,author:this.ActiveUser.Username,text:this.formComment.value.commentText};
    this.formComment.reset();
    this.Post.postComments.unshift(tempComment);
    this.toastr.success("Comment has been created.")
    
  }

  logout() {
    if(confirm("Do you want to logout?")){
      localStorage.clear();
      this.router.navigate(['/user']);
    }
  }

  editUser(){
    if(confirm("Do you want to edit User?")){
      this.toastr.success("Successfully edited User.");
      this.mainMenuOpen=3;
    }

  }

  deletePost(element){
    if(confirm("Do you want to delete Post?")){
      this.service.postas.splice(this.service.postas.indexOf(element),1)
      this.ActiveUser.TotalPosted--;
    }
    this.sortByNew();
  }

  deleteuser(){
    if(confirm("Are you sure you want to delete your account?"))
    this.userService.users.splice(this.userService.users.indexOf(this.ActiveUser),1);
    localStorage.clear();
    this.router.navigate(['/user']);
  }
}
