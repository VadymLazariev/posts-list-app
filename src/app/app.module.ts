import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AppRoutingModule } from './app.routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    AddPostComponent,
    UpdatePostComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
