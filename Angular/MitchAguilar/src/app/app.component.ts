import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  email: string;
  hobbies: string[];
  showhobbies: boolean;

  constructor(private postService: PostService ) {
    this.name = "Mitch";
    this.email = "mitchaguilar@udla.edu.co";
    this.hobbies = ['program', 'schedule a little more', 'to coc** I only know how to program'];
    this.showhobbies = false;
    this.postService.getPost().subscribe(posts=>{
      console.log(posts);
    })
  }
  togglehobbies() {
    this.showhobbies = !this.showhobbies;
  }
  newHobby(hobby) {
    this.hobbies.push(hobby.value);
    //console.log(hobby);
    hobby.value=null;
    return false;
  }
}
