// Ni bina Component sendiri

// Import component package dari angular
import { Component } from '@angular/core';

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
  enteredValue = '';
  newPost = 'NO CONTENT';

  //letak nama method
  onAddPost(){
    // console.log(postInput);
    this.newPost = this.enteredValue;

  }
}
