import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  formComment=this.fb.group({
    commentText:"",

  })

  
  mainMenuOpen:boolean=true;
  rndComments:Comment[]=[
    {
      votes:3,
      author:"memedma",
      text:"hahaa"
    },
    {
      votes:6,
      author:"sude",
      text:"lollol"
    },
    {
      votes:1,
      author:"dubcer",
      text:"skdjsdk"
    },
    {
      votes:3,
      author:"Kerem",
      text:"komik degil"
    },
    {
      votes:3,
      author:"dora",
      text:"komikmis"
    },
    {
      votes:3,
      author:"Mert",
      text:"lsdksld"
    },
  ]

  formPost=this.fb.group({
    postContent: "",
    postOwner: "Admin",
    postTitle: "",
    postComments:[this.rndComments[0],this.rndComments[2]], 
  })

  postas: Post[] = [
    {
      postContent: "https://i.redd.it/irxao14hqb581.png",
      postOwner: "Ahmet",
      postTitle: "funny words",
      postComments: [this.rndComments[3],this.rndComments[2]]
    },
    {
      postContent: "https://64.media.tumblr.com/958f628cb6dfc4913c64b3ad71afaa5b/tumblr_pxgvdvUHgn1ypupneo1_400.gifv",
      postOwner: "Ahmet",
      postTitle: "look at this",
      postComments: [this.rndComments[3],this.rndComments[2]]
    },
    {
      postContent: "https://i.imgur.com/96frlHk.jpeg",
      postOwner: "mehmet",
      postTitle: "not funy",
      postComments: [this.rndComments[3],this.rndComments[4]]
    }];

  Post: Post = {
    postContent: "filler",
    postOwner: "filler",
    postTitle: "funny words",
    postComments: [this.rndComments[1],this.rndComments[5]]
  };
  
  createPost(){
    this.postas.push({
      postContent: this.formPost.value.postContent,
      postOwner: this.formPost.value.postOwner,
      postTitle: this.formPost.value.postTitle,
      postComments: [this.rndComments[0]]
    })
    console.log(this.postas)
    this.mainMenuOpen=true;
  }

  loadPosts() {
    this.postas.push({
      postContent: "https://preview.redd.it/ibcc1lcbdn581.jpg?width=640&crop=smart&auto=webp&s=478a1035d046cb7d8bf1ee163409b2d0b2d6de9f",
      postOwner: "carsi",
      postTitle: "yeter artuj",
      postComments: [this.rndComments[1],this.rndComments[5]]
    })
  }
  sort() {
    this.postas.reverse();
  }

  createComment(){
    var tempComment:Comment={votes:1,author:"Admin",text:this.formComment.value.commentText};
    this.Post.postComments.push(tempComment);
    this.formComment.reset();
  }
}
