import { Component, OnInit } from '@angular/core';
import { UC07Service } from 'src/app/services/uc07.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-uc07',
  templateUrl: './uc07.page.html',
})
export class UC07Page implements OnInit {
  salesData: any;

  constructor(private uc07Service: UC07Service) {}

  ngOnInit() {
    this.uc07Service.getSalesData().subscribe((data) => {
      this.salesData = data;
      this.initCharts();
    });
  }

  initCharts() {
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.salesData.months,
        datasets: [
          {
            label: 'Valor Total de Custo',
            data: this.salesData.costs,
          },
          {
            label: 'Valor Total de Venda',
            data: this.salesData.sales,
          },
        ],
      },
    });

    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.salesData.months,
        datasets: [
          {
            label: 'Quantidade Comprada',
            data: this.salesData.purchased,
          },
          {
            label: 'Quantidade Vendida',
            data: this.salesData.sold,
          },
        ],
      },
    });
  }
}
