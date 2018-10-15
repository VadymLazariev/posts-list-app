import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { map } from 'rxjs/operators/';
import { ApiUrls } from '../api-urls';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient, private router: Router) { }

  posts$ = new BehaviorSubject<Post[]>(null);

  getPosts() {
    // return this.http.get<Post[]>(ApiUrls.posts);
    this.http.get<Post[]>(ApiUrls.posts).subscribe(value => this.posts$.next(value));
  }

  deletePost(id: number) {
    return this.http.delete<Post[]>(ApiUrls.posts + `/${id}`);
  }

  putPost(body, id) {
    this.navigateTo('');
    this.removePostFormStorage();
    return this.http.put(ApiUrls.posts + `/${id}`, body);
  }

  addPost(body) {
    this.navigateTo('');
    return this.http.post(ApiUrls.posts, body);
  }

  setPost(post) {
    localStorage.setItem('post', JSON.stringify(post));
    this.navigateTo('/edit-post');
  }

  get post() {
    return JSON.parse(localStorage.getItem('post'));
  }

  removePostFormStorage() {
    localStorage.removeItem('post');
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
