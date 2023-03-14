import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post/post.module';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  myArray:any = [];
  myPost: Post= {
    "id": '',
    "titre": '',
    "contenu": ""
  }
  MyCondition=false ;
  constructor(private MyVar:PostService ) {
   }
  ngOnInit(){
this.getpost();
  }
getpost(){
  this.MyVar.getAll()
  .subscribe(data => {
    this.myArray=data;
  })
}

  deletepost(id: any){
    this.MyVar.delete(id)
    .subscribe( ()=> {
      this.myArray= this.myArray.filter
      ((Myapp: { id: any; }) => Myapp.id != id)
  })
}

CreateNewPost() {
  this.MyVar.postCr(this.myPost)
  .subscribe((mypost:Post)=>{
    this.myArray = [mypost, ...this.myArray]
  })
  this.resetPost();
}
resetPost(){
  this.myPost = {
    "id": '',
    "titre": '',
    "contenu": "" 
  }
}
EditPost(Myapp: Post){
  this.myPost = Myapp ;
  this.MyCondition= true ;
}

UpdateMyPost(){
  this.MyVar.updatePost(this.myPost)
      .subscribe((Poste) => {
        this.resetPost();
        this.MyCondition=false;
      })
}

}
