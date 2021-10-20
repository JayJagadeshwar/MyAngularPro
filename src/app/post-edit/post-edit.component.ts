import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../Post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  form !: FormGroup;
  index !: number;
  editMode = false;

  constructor(private postService: PostService,private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

    let title = '';
    let description = '';
    let imagePath = '';
    let author = '';

    this.route.params.subscribe((params : Params) => {
      if(params['index']){
        this.index = params['index'];
        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;
        author = post.author;

        this.editMode = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
      author: new FormControl(author, [Validators.required])
    })
  }


  onSubmitPost(): void {
    const title: string = this.form.value.title;
    const description: string = this.form.value.description;
    const imagePath: string = this.form.value.imagePath;
    const author: string = this.form.value.author;

    //calling the Post constructor and passing the values
    const post: Post = new Post(title, description, imagePath, author);

    //calling the add/post post method

    if(this.editMode){
      this.postService.updatePost(this.index,post);
    }else{
      this.postService.addPost(post);
    }

    //navigating to list page after succesfully adding the country
    this.router.navigate(["/post-list"]);
  }
}
