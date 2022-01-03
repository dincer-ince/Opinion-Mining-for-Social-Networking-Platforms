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
    "Music",
    "Anime"
  ];

  rndComments:Comment[]=[
    
    {
      votes:1,
      author:"dincerince",
      text:"skdjsdk"
    },
    {
      votes:3,
      author:"sudesahin",
      text:"komik degil"
    },
    {
      votes:3,
      author:"doracik",
      text:"komikmis"
    },
    {
      votes:3,
      author:"mrtglr",
      text:"lsdksld"
    },
    
    {
      votes:23,
      author:"mrtglr",
      text:"Fav gif"
    },
    {
      votes:56,
      author:"doracik",
      text:"Python is faster right?"
    },
    {
      votes:-140,
      author:"",
      text:""
    },
    {
      votes:19,
      author:"dincerince",
      text:"lol idk"
    },
    {
      votes:12,
      author:"sudesahin",
      text:"u lucky"
    },
    {
      votes:34,
      author:"mrtglr",
      text:"Feedbacks about this guitar is so positive man"
    },
    {
      votes:75,
      author:"mrtglr",
      text:"Congratulations!!"
    },
  ]

  postas: Post[] = [
    {
      postTopic: this.Topics[4],
      postContent: "https://c.tenor.com/gmciOFywerkAAAAC/tokyo-revengers-draken.gif",
      postOwner: "Dora",
      postTitle: "Draken-kun!! ",
      postComments: [this.rndComments[3],this.rndComments[2]],
      postVotes: 678
    },
    {
      postTopic: this.Topics[2],
      postContent: "https://miro.medium.com/max/957/1*Gytsn6MVvF7Sv9SUNmZRMg.png",
      postOwner: "dincerince",
      postTitle: "Which one is better for ML??",
      postComments: [this.rndComments[4],this.rndComments[5]],
      postVotes: 983
    },
    {
      postTopic: this.Topics[0],
      postContent: "https://www.letseatcake.com/wp-content/uploads/2021/07/funny-memes-24.jpg",
      postOwner: "sudesahin",
      postTitle: "which one for you?",
      postComments: [this.rndComments[7],this.rndComments[8]],
      postVotes: 751
    },
    {
      postTopic: this.Topics[2],
      postContent: "https://i.redd.it/iiqg1f9wg7981.jpg",
      postOwner: "dincerince",
      postTitle: "Always in Disguise..",
      postComments: [this.rndComments[4],this.rndComments[5]],
      postVotes: 46
    },
    {
      postTopic: this.Topics[3],
      postContent: "https://images.reverb.com/image/upload/s--Gv0h2G7S--/f_auto,t_supersize/v1529422133/jk27uzmspi3cjd71ytau.png",
      postOwner: "mrtglr",
      postTitle: "Getting this in new year.",
      postComments: [this.rndComments[9],this.rndComments[10]],
      postVotes: 751
    },
    {
      postTopic: this.Topics[1],
      postContent: "https://img-s1.onedio.com/id-61c9e13116f54d3767ede32c/rev-0/w-620/f-jpg/s-a50641db131b429dd74fae429ec79f4198e8674c.jpg",
      postOwner: "dincerince",
      postTitle: "Rekor? Turkiye'den?",
      postComments: [this.rndComments[1],this.rndComments[2]],
      postVotes: 987
    },
    {
      postTopic: this.Topics[2],
      postContent: "https://i.imgur.com/XNDrOXO.jpg",
      postOwner: "mrtglr",
      postTitle: "Happy New Year everyone!",
      postComments: [this.rndComments[1],this.rndComments[2]],
      postVotes: 987
    },
    
    ];
  }
