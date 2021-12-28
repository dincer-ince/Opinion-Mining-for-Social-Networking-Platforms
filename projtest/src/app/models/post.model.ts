import { Comment } from "./comment.model";
export class Post {
    postTopic="";
    postContent="";
    postOwner="";
    postTitle="";
    postComments:Comment[]=[{votes:0,author:"",text:""}]
    postVotes:number=0;
}
