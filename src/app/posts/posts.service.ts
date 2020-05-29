// Kalau guna Dependency dah xleh guna Emmiter dengan decorator Input/Output
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';


// Service Component : centralize easy access to data from different component
// Dependency injection
// @Injectacble ni la dependency injection.. kalau x buat ni boleh declare kat app.module.ts mcm biasa(Section2, Lect 27)
// nak taw lagi banyak pasai observables, observers and subcription tgk Section 2 lect 29
@Injectable({providedIn: 'root'})
export class PostsService {
  // store list of posts
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  // get and add is similar to getter and setter
  getPosts(){
    // create new array from the old object
    // normally look like this: return this.posts;
    // do because doesnt want other component to edit the private posts in this class
    return [...this.posts];
  }

  // Object can be listened
  getPostUpdateListerner() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post = {title: title, content: content};
    // push post receive from addPost() to getPosts()
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
