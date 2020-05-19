// @input tu decorator
// bagi luar dari component ni pon leh dengar event ni.
// maksudnya Parent component pon leh pakai (dekat app.component.html)
import { Component, Input} from '@angular/core';

import { Post } from '../post.model'

@Component({
  selector : 'app-post-list',
  templateUrl :  './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  // declare variable
  // posts = [
  //   { title: 'First Post', content: 'this is the First post\'s content' },
  //   { title: 'Second Post', content: 'this is the Second post\'s content' },
  //   { title: 'Third Post', content: 'this is the Third post\'s content' }
  // ]
  @Input() posts: Post[] = [];

}

// guna directive untuk manipulate DOM
