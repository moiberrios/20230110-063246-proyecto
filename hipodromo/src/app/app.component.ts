import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { CompraService } from './services/compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-http-client';

  constructor(
    private compraService: CompraService
  ) {}

  getAllCompras() {
    this.compraService.getAllCompras()
    .subscribe(compras => {
      console.log(compras);
    });
  }

  getCompra() {
    this.compraService.getCompra(2)
    .subscribe(compra => {
      console.log(compra);
    });
  }

  createCompra() {
    const compra = {
      co_cod: 10,
      co_fecha: '2022-01-10',
      co_monto: 3.00,
      fk_taq: 1,
      fk_cli: 1
    };
    this.compraService.createCompra(compra)
    .subscribe((newCompra) => {
      console.log(newCompra);
    });
  }
  updateCompra() {
    const compra = {
      co_cod: 10,
      co_fecha: '2023-01-16',
      co_monto: 3.00,
      fk_taq: 1,
      fk_cli: 1
    };
    this.compraService.updateCompra(compra)
    .subscribe(todo => {
      console.log(todo);
    });
  }

  deleteCompra() {
    this.compraService.deleteCompra(1)
    .subscribe((data) => {
      console.log(data);
    });
  }


}
