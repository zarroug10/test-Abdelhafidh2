import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post/post.module';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http: HttpClient) { }

url='http://localhost:3000/Myposts'
  //GET
getAll(){
  return this.http.get<Post>(this.url);
}
//DELETE
delete(id: any){
  return this.http.delete(`${this.url}/${id}`);
}
//CREATE
postCr(Myposts: any){
  return this.http.post<Post>(this.url, Myposts);
}
//UPDATE
updatePost(Myposts:Post){
  return this.http.put(`${this.url}/${Myposts.id}`, Myposts);
 }
 }
