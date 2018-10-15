import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../core/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private postService: PostService) { }
  posts$: Observable<Post[]>;
  ngOnInit() {
    this.loadPosts();
  }
  loadPosts() {
    this.postService.getPosts();
    this.posts$ = this.postService.posts$;
    //this.posts$ = this.postService.getPosts();
  }
  deletePost(id) {
    this.postService.deletePost(id).subscribe(  () => this.loadPosts());
  }
  addToStorage(post) {
    this.postService.setPost(post);
  }
  trackByFn(item) {
    return item.id;
  }
}
