import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../models/product.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-information',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './product-information.component.html',
  styleUrl: './product-information.component.css'
})
export class ProductInformationComponent {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
