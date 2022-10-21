import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
public likeButton: string = "";
public like: number = 0;
  constructor() {
   }

  ngOnInit(): void {
    this.likeButton = "Like";
    this.like = 0;
  }
  onLike() {
    if (this.likeButton === 'Like') {
      this.like++;
      this.likeButton = 'Dislike';
    } else {
      this.like--;
      this.likeButton = 'Like';
    }
  }

}
