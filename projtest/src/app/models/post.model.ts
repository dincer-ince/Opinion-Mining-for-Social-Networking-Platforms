import { Comment } from "./comment.model";
export class Post {
    postContent="";
    postOwner="";
    postTitle="";
    postComments:Comment[]=[{votes:0,author:"",text:""}]
}
