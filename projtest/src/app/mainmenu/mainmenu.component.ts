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
    this.loadPosts();
  }

  formComment=this.fb.group({
    commentText:"",

  })

  
  mainMenuOpen:boolean=true;
  
  

  formPost=this.fb.group({
    postContent: "",
    postOwner: "Admin",
    postTitle: "",
    postComments:[this.service.rndComments[0],this.service.rndComments[2]], 
  })

  

  Post: Post = {
    postContent: "filler",
    postOwner: "filler",
    postTitle: "funny words",
    postComments: [this.service.rndComments[1],this.service.rndComments[5]]
  };
  
  createPost(){
    this.service.postas.push({
      postContent: this.formPost.value.postContent,
      postOwner: this.formPost.value.postOwner,
      postTitle: this.formPost.value.postTitle,
      postComments: [this.service.rndComments[0]]
    })
    console.log(this.service.postas)
    this.mainMenuOpen=true;
  }

  loadPosts() {
    this.service.postas.push({
      postContent: "https://preview.redd.it/ibcc1lcbdn581.jpg?width=640&crop=smart&auto=webp&s=478a1035d046cb7d8bf1ee163409b2d0b2d6de9f",
      postOwner: "carsi",
      postTitle: "yeter artuj",
      postComments: [this.service.rndComments[1],this.service.rndComments[5]]
    })
  }
  sort() {
    this.service.postas.reverse();
  }

  createComment(){
    var tempComment:Comment={votes:1,author:"Admin",text:this.formComment.value.commentText};
    this.Post.postComments.push(tempComment);
    this.formComment.reset();
  }
}
