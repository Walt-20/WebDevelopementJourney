import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatToolbarModule,
    RouterModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {this.cart = _cart});    
  }
}
