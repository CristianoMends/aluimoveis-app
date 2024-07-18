import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent implements AfterViewInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() address!: string;
  @Input() price!: number;
  @Input() available!: string;
  @Input() images!: string[];

  ngAfterViewInit() {

  }



}
