import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  Topics:string[] = [
    "Funny",
    "Sports",
    "Programming",
    "Music"
  ];

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
    {
      votes:0,
      author:"",
      text:""
    },
  ]

  postas: Post[] = [
    {
      postTopic: this.Topics[0],
      postContent: "https://i.redd.it/irxao14hqb581.png",
      postOwner: "Ahmet",
      postTitle: "funny words",
      postComments: [this.rndComments[3],this.rndComments[2]],
      postVotes: 300
    },
    {
      postTopic: this.Topics[0],
      postContent: "https://64.media.tumblr.com/958f628cb6dfc4913c64b3ad71afaa5b/tumblr_pxgvdvUHgn1ypupneo1_400.gifv",
      postOwner: "Ahmet",
      postTitle: "look at this",
      postComments: [this.rndComments[3],this.rndComments[2]],
      postVotes: 5
    },
    {
      postTopic: this.Topics[0],
      postContent: "https://i.imgur.com/96frlHk.jpeg",
      postOwner: "mehmet",
      postTitle: "not funy",
      postComments: [this.rndComments[3],this.rndComments[4]],
      postVotes: 903
    }];
}
