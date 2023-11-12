import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductInformationComponent } from './components/product-information/product-information.component';


const ROWS_HEIGHT: { [id:number]: number } = { 1: 400, 3: 335, 4: 350 }
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    ProductsHeaderComponent,
    FiltersComponent,
    MatGridListModule,
    ProductInformationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

}
