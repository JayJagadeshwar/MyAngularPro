import { Component, OnInit } from '@angular/core';
import { Post } from '../Post.model';
import { PostService } from '../post.service';
//import { time } from 'console';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  listOfPost : Post[] = [];

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.listOfPost = this.postService.getPosts();
  }
}
