// Tempat import Module dari Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//call module Forms untuk guna ngModel. Untuk material cara nak import click kat component mana pastu click API
import { FormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

//tempat nak import component sendiri
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  // Declare component yg kita bina
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent

  ],
  // Declare kat import nak guna module baru dari Angular
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// run command ni untuk downgrade ke angular material v8:  npm install --save @angular/material@8 --save-exact
