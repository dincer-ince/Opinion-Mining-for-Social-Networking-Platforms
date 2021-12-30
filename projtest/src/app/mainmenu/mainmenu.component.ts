import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../_services/post.service';


@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(private fb:FormBuilder, public service: PostService) { }

  ngOnInit(): void {
    this.viewPosts= this.service.postas.slice();
    this.loadPosts();
  }

  formComment=this.fb.group({
    commentText:"",

  })
  
  mainMenuOpen:boolean=true;
  

  formPost=this.fb.group({
    postTopic:"",
    postContent: "",
    postOwner: "Admin",
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


  createPost(){
    this.service.postas.push({
      postTopic: this.formPost.value.postTopic,
      postContent: this.formPost.value.postContent,
      postOwner: this.formPost.value.postOwner,
      postTitle: this.formPost.value.postTitle,
      postComments: [this.service.rndComments[6]],
      postVotes: 1
    })
    console.log(this.formPost)
    this.mainMenuOpen=true;
    this.sortByNew();
  }
  

  loadPosts() {
    this.service.postas.push({
      postTopic: this.service.Topics[0],
      postContent: "https://i.imgur.com/S2lYrKD.gif",
      postOwner: "carsi",
      postTitle: "yeter artuj",
      postComments: [this.service.rndComments[1],this.service.rndComments[5]],
      postVotes: 467
    })
    this.sortByNew()
  }
  sortByNew() {
    this.viewPosts=this.service.postas;
    this.viewPosts.reverse();
  }
  sortByBest(){
    this.viewPosts=this.service.postas;
    this.viewPosts.sort((a, b) => (a.postVotes > b.postVotes ? -1 : 1))
  }

  createComment(){
    var tempComment:Comment={votes:1,author:"Admin",text:this.formComment.value.commentText};
    this.formComment.reset();
    this.Post.postComments.unshift(tempComment);
    
  }
}
