import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    MatToolbarModule,
    RouterModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-app';
}
