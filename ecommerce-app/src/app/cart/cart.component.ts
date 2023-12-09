import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart, CartItem } from '../models/cart.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private router: Router, private cartService: CartService, private http: HttpClient) { }

  cart: Cart = { items: [
    {
      product: 'https://via.placeholder.com/150',
      name: 'sneakers',
      price: 150,
      quantity: 1,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'sneakers',
      price: 150,
      quantity: 3,
      id: 2,
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

  ngOnInit() {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onCheckout(): void {
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async(res: any) => {
      let stripe = await loadStripe(environment.STRIPE_PRIVATEKEY);
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    });
  }
}
