import { Component, computed, effect, input } from '@angular/core';
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
  priceWithTax = computed(()=>this.product().price * 1.4);
  constructor(){
    effect(()=>{
      console.log('product =>',this.product());
    })
  }
}
