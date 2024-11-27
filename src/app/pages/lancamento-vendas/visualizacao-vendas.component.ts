import { Component, OnInit } from '@angular/core';
import { VisualizacaoVendasService } from '../../services/visualizacao-vendas.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-visualizacao-vendas',
  templateUrl: './visualizacao-vendas.component.html',
  styleUrls: ['./visualizacao-vendas.component.scss']
})
export class VisualizacaoVendasComponent implements OnInit {
  chartLinhas: any;
  chartBarras: any;

  constructor(private vendasService: VisualizacaoVendasService) {}

  ngOnInit() {
    this.carregarGraficoLinhas();
    this.carregarGraficoBarras();
  }

  carregarGraficoLinhas() {
    this.vendasService.obterDadosGraficoLinhas().subscribe(data => {
      this.chartLinhas = new Chart('graficoLinhas', {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Valor de Custo',
              data: data.custos,
              borderColor: 'blue',
              fill: false
            },
            {
              label: 'Valor de Venda',
              data: data.vendas,
              borderColor: 'green',
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' }
          }
        }
      });
    });
  }

  carregarGraficoBarras() {
    this.vendasService.obterDadosGraficoBarras().subscribe(data => {
      this.chartBarras = new Chart('graficoBarras', {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Quantidades Compradas',
              data: data.compradas,
              backgroundColor: 'orange'
            },
            {
              label: 'Quantidades Vendidas',
              data: data.vendidas,
              backgroundColor: 'purple'
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' }
          }
        }
      });
    });
  }
}
