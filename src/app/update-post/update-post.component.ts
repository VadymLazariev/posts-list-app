import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../core/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  constructor(private fb: FormBuilder, private postService: PostService) { }
  editPostForm = this.fb.group({
    title: [this.postService.post.title],
    body: [this.postService.post.body],
  });

  submit() {
    let post = {
      userId: this.postService.post.userId,
      id: this.postService.post.id,
      title: this.editPostForm.controls.title.value,
      body: this.editPostForm.controls.body.value
    };
    this.postService.putPost(post, post.id).subscribe(
      () => this.postService.getPosts()
    );
  }

  cancel() {
    this.postService.navigateTo('');
  }
  ngOnInit() {

  }

}
