import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../Post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post !: Post;
  @Input() index !: number;

  constructor(private postservice : PostService, private router : Router) { }

  ngOnInit(): void {
    //console.log(this.index);
  }

  deletethePost() :void {
    this.postservice.deletePost(this.index);
  }

  onEdit(){
    this.router.navigate(["/post-edit",this.index]);
  }
}
