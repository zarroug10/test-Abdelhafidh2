import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  myArray:any = [];
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
}
