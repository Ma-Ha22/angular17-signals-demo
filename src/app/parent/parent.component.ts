import { Component, computed, OnInit, signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../Interfaces/Iproduct.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  products= signal<IProduct[]>([]);
  search = signal('')
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getAll().subscribe((res:IProduct[])=>{
      this.products.set(res);
      console.log('products',res);
    })
  }
  filteredProducts = computed<IProduct[]>(()=>{
    return this.products().filter(p=>p.title.toLowerCase().includes(this.search().toLowerCase()));
  })
  
}
