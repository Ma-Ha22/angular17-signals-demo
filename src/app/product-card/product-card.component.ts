import { Component, input } from '@angular/core';
import { IProduct } from '../Interfaces/Iproduct.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input.required<IProduct>();
}
