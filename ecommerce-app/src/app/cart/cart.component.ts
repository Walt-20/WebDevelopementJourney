import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart, CartItem } from '../models/cart.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart: Cart = { items: [
    {
      product: 'https://via.placeholder.com/150',
      name: 'sneakers',
      price: 150,
      quantity: 1,
      id: 1,
    }
  ]};
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];
}
