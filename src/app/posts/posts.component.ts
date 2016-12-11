import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.data.subscribe((data: any) => {
    //   this.posts = data.posts;
    // });

    this.posts = this.route.snapshot.data['posts'];
  }

}
