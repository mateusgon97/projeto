import { Component } from '@angular/core';
import { UC06Service } from 'src/app/services/uc06.service';

@Component({
  selector: 'app-uc06',
  templateUrl: './uc06.page.html',
})
export class UC06Page {
  cart: any[] = [];
  newItem: any = {};

  constructor(private uc06Service: UC06Service) {}

  addItem() {
    this.uc06Service.addItemToCart(this.newItem).subscribe((response) => {
      this.cart.push(this.newItem);
      this.newItem = {};
    });
  }

  finalizeSale() {
    this.uc06Service.finalizeSale({ items: this.cart }).subscribe((response) => {
      alert('Venda finalizada com sucesso!');
      this.cart = [];
    });
  }
}
