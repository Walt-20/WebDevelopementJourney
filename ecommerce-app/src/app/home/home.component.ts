import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    ProductsHeaderComponent,
    FiltersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cols = 3;
  category: string | undefined

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

}
