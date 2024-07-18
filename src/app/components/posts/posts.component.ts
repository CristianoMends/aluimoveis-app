import { AfterViewInit, Component, Inject } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../../service/post-service';
import { CommonModule } from '@angular/common';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  providers: [PostService],
  imports: [PostCardComponent, HttpClientModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})

export class PostsComponent implements AfterViewInit {
  constructor(private postService: PostService) { }

  posts: Post[] = [];

  getPosts() {
    let posts: Post[] = [];
    this.postService.getPosts().subscribe({
      next: (data: Post[]) => {
        posts = data;
      },
      error: (err) => {
        console.error(err)
      }
    }
    );
    return posts;
  }

  ngAfterViewInit(): void {
    this.posts = this.getPosts();
  }


}
