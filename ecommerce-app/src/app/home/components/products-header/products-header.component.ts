import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = "desc";
  itemsShowCount = 12;

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdate(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdate(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
