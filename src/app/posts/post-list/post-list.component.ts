// @input tu decorator
// bagi luar dari component ni pon leh dengar event ni.
// maksudnya Parent component pon leh pakai (dekat app.component.html)
import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model'
import { PostsService } from '../posts.service'

@Component({
  selector : 'app-post-list',
  templateUrl :  './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
  // declare variable
  // posts = [
  //   { title: 'First Post', content: 'this is the First post\'s content' },
  //   { title: 'Second Post', content: 'this is the Second post\'s content' },
  //   { title: 'Third Post', content: 'this is the Third post\'s content' }
  // ]
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;

  // Dependency injection from post.service.ts
  // public will create property and store all data in the postsService
  // or else need to delcare postsService: PostsService; and then in constructor put this.postsService=postsService;
  constructor(public postsService: PostsService){

  }

  // bila implemenmts OnInit method kena tambah method ni dalam class ni
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    // Subscribe to Object can be listened in posts.service.ts
    // .subcribe take 3 argument: 1: function execute bila new data. 2: execute bila ada error 3: function akan dicall bila subcribe di executed
    this.postsSub = this.postsService.getPostUpdateListerner()
    .subscribe((posts: Post[])=>{
      this.posts = posts;
     });
  }

  // OnDestroy apa yg patut berlaku bila pergi ke page lain. Guna ni untuk prevent memory leakage
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
// guna directive untuk manipulate DOM
