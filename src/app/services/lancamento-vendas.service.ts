import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoVendasService {
  private baseUrl = 'http://localhost:8080/api/vendas';

  constructor(private http: HttpClient) {}

  verificarProduto(produtoId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/verificar-produto/${produtoId}`);
  }

  verificarEstoque(produtoId: number, quantidadeVendida: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/verificar-estoque/${produtoId}/${quantidadeVendida}`);
  }

  calcularValorVenda(produtoId: number, quantidadeVendida: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/calcular-valor-venda/${produtoId}/${quantidadeVendida}`);
  }

  realizarVenda(venda: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/realizar-venda`, venda);
  }
}
