import { Component } from '@angular/core';

import { Post } from './posts/post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title ni point dekat title tag ni index.html
  // title = 'mean-poc';

  // variable ni based on model Post[] from post.model.ts
  // storedPosts: Post[] = [];

  // onPostAdded(post){
  //   // call storedPosts dari variable, lepastu push post dari method argument ke dalam variable
  //   this.storedPosts.push(post);
  //   console.log(this.storedPosts);
  // }

}
