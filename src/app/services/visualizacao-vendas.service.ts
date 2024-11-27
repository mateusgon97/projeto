import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisualizacaoVendasService {
  private baseUrl = 'http://localhost:8080/api/relatorios-e-graficos';

  constructor(private http: HttpClient) {}

  obterVendasMensais(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vendas-mensais`);
  }

  obterDadosGraficoLinhas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/grafico-quantidades-compradas-vendidas-linhas`);
  }

  obterDadosGraficoBarras(): Observable<any> {
    return this.http.get(`${this.baseUrl}/grafico-quantidades-compradas-vendidas-barras`);
  }
}
