import { Component } from '@angular/core';

@Component({
  selector : 'app-post-list',
  templateUrl :  './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  // declare variable
  posts = [
    { title: 'First Post', content: 'this is the First post\'s content' },
    { title: 'Second Post', content: 'this is the Second post\'s content' },
    { title: 'Third Post', content: 'this is the Third post\'s content' }
  ]
}

// guna directive untuk manipulate DOM
