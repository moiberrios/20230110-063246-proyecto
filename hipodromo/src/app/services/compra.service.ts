import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Compra } from '../interfaces/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private api='http://localhost:3000/api'
  constructor(
    private http: HttpClient
  ) { }
    
  getAllCompras() {
    const path = `${this.api}/compra/all`
    return this.http.get<Compra[]>(path);
  }

  getCompra(id:number){
    const path = `${this.api}/compra/find/${id}`;
    return this.http.get<Compra>(path);
  }
  
  createCompra(compra: Compra) {
    const path = `${this.api}/todos`;
    return this.http.post(path, compra);
  }

  updateCompra(compra: Compra) {
    const path = `${this.api}/todos/${compra.co_cod}`;
    return this.http.put<Compra>(path, compra);
  }

  deleteCompra(id: number) {
    const path = `${this.api}/todos/${id}`;
    return this.http.delete(path);
  }
}
