import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [NgIf, NgFor],
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
  @Input() date!: Date;

  @ViewChild('imagesContainer') imagesContainer!: ElementRef;
  @ViewChild('postCard') postCard!: ElementRef;

  private imgWidth: number = 0;
  public currentIndex = 0;
  public currentPosition: number = 0;
  private cardWidth = 0;
  private qtdImages = 0;

  ngAfterViewInit() {
    this.cardWidth = this.postCard.nativeElement.offsetWidth;
    this.imgWidth = this.getImgWidth();
    this.qtdImages = this.imagesContainer.nativeElement.querySelectorAll('.img').length;
  }

  private getImgWidth() {
    const container = this.imagesContainer.nativeElement;
    if (container.children.length > 0) {
      const child = container.children[0];
      return child.clientWidth;
    }
  }

  public getQtdImg(): number {
    return this.images.length;
  }

  nextImg() {
    this.currentPosition = this.cardWidth * ++this.currentIndex;
    this.imagesContainer.nativeElement.style.transform = `translateX(-${this.currentPosition}px)`;
  }
  prevImg() {
    this.currentPosition = this.imgWidth * --this.currentIndex;
    this.imagesContainer.nativeElement.style.transform = `translateX(-${this.currentPosition}px)`;
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.currentPosition = this.cardWidth * this.currentIndex;
    this.imagesContainer.nativeElement.style.transform = `translateX(-${this.currentPosition}px)`;
  }


}
