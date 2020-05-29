// Ni bina Component sendiri

// Import component package dari angular
import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';

import { Post } from '../post.model'
import { PostsService } from '../posts.service';

// Typescriptclass, @Component tu decorators
//Typical component ada selector dan templateUrl
@Component({
  // selector allow us to use the component
  selector: 'app-post-create',
  // templateUrl: '<h1>Mcm ni pon boleh, tapi better letak file lain. senang nak organize</h1>'
  templateUrl: './post-create.component.html',
  // add custom css
  styleUrls: ['./post-create.component.css']
})
// Benda ni akan di export ke app.module.ts
export class PostCreateComponent{
  //declare variable
  enteredTitle = '';
  enteredContent = '';

  // untuk Event Emitter. postCreated tu boleh nama apa2. @output tu decorator
  // bagi luar dari component ni pon leh dengar event ni. maksudnya Parent component pon leh pakai (dekat app.component.html)
  // @Output() postCreated = new EventEmitter<Post>();


  constructor(public postsService: PostsService){

  }

  //letak nama method
  // Data dari Form masuk sini
  onAddPost(postForm: NgForm){
    // console.log(postInput);
    // hantaq array key = title,content value= value amik
    // if ni untuk check kalau invalid return balik.. xyah terima input
    if (postForm.invalid) {
      return ;
    }
    // const post: Post = {
    //   title: postForm.value.title,
    //   content: postForm.value.content
    // };

    // this.postCreated.emit(post);
    this.postsService.addPost(postForm.value.title, postForm.value.content);
    // postForm.resetForm(); ni untuk reset balik text bila dh tekan save post
    postForm.resetForm();
  }
}
