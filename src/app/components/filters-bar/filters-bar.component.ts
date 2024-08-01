import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filters-bar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filters-bar.component.html',
  styleUrl: './filters-bar.component.scss'
})
export class FiltersBarComponent {
  @ViewChild('selectedCategory') selectedCategory!: ElementRef;
  @ViewChild('selectedPriceRange') selectedPriceRange!:ElementRef;
  @ViewChild('selectedSortOption') selectedSortOption!:ElementRef;

  priceRanges = ['< R$ 400', '$ 400 - $700', '$100 - $200', '> $200'];
  sortOptions = ['Preço: Crescente', 'Preço: Descrescente', 'Mais recentes', 'Mais antigos'];

  applyFilters() {
    console.log('Category:', this.selectedCategory);
    console.log('Price Range:', this.selectedPriceRange);
    console.log('Sort Option:', this.selectedSortOption);
  }

}
