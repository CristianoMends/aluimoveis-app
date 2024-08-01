import { AfterViewInit, Component, Inject } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../../service/post-service';
import { CommonModule, DatePipe } from '@angular/common';
import { Post } from '../../interface/post';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';


@Component({
  selector: 'app-posts',
  standalone: true,
  providers: [PostService, DatePipe],
  imports: [PostCardComponent, HttpClientModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})

export class PostsComponent implements AfterViewInit {
  constructor(private postService: PostService, private datePipe: DatePipe) { }

  posts: Post[] = [];

  getPosts() {
    let posts: Post[] = [];
    this.postService.getPosts().subscribe({
      next: (data: any[]) => {
        data.map(p => {
          p.price = p.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });

          const pastDate = parseISO(p.creationDate);

          if (!isNaN(pastDate.getTime())) {
            const timeDistance = formatDistanceToNow(pastDate, { addSuffix: false, locale: ptBR });
            p.creationDate = `${timeDistance}`;
          }

        });
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
