import { Injectable } from '@angular/core';
import { Post } from './Post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  listOfPosts :Post[] = [
    new Post("India",
    "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world",
    "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    "Jay"
    ),

    new Post("New Zealand",
    "New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and more than 700 smaller islands, covering a total area of 268,021 square kilometres.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png",
    "Mike Turner"
    ),

    new Post("China",
    "China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion.",
    "https://cdn.britannica.com/90/7490-050-5D33348F/Flag-China.jpg",
    "Sung mea"
    ),
  ]

  
  //facility 1 getting the list of posts
  getPosts() : Post[]{
    return this.listOfPosts;
  }

  deletePost(index : number) : void{
    this.listOfPosts.splice(index,1);
  }

  addPost(post :Post){
      this.listOfPosts.push(post);
  }

  getPost(index : number){
    return this.listOfPosts[index];
  }

  updatePost(index : number, post : Post){
      this.listOfPosts[index] = post;
  
  }

}
function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

