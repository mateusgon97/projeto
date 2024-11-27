import { Component } from '@angular/core';
import { LancamentoVendasService } from '../../services/lancamento-vendas.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lancamento-vendas',
  templateUrl: './lancamento-vendas.component.html',
  styleUrls: ['./lancamento-vendas.component.scss']
})
export class LancamentoVendasComponent {
  vendaForm: FormGroup;
  produtoDetalhes: any = null;
  valorVenda: number = 0;
  estoqueDisponivel: boolean = true;

  constructor(
    private vendasService: LancamentoVendasService,
    private fb: FormBuilder
  ) {
    this.vendaForm = this.fb.group({
      produtoId: [null],
      quantidade: [null]
    });
  }

  verificarProduto() {
    const produtoId = this.vendaForm.value.produtoId;
    this.vendasService.verificarProduto(produtoId).subscribe(response => {
      this.produtoDetalhes = response;
    });
  }

  verificarEstoque() {
    const { produtoId, quantidade } = this.vendaForm.value;
    this.vendasService.verificarEstoque(produtoId, quantidade).subscribe(response => {
      this.estoqueDisponivel = response;
    });
  }

  calcularValor() {
    const { produtoId, quantidade } = this.vendaForm.value;
    this.vendasService.calcularValorVenda(produtoId, quantidade).subscribe(response => {
      this.valorVenda = response;
    });
  }

  realizarVenda() {
    const venda = this.vendaForm.value;
    this.vendasService.realizarVenda(venda).subscribe(response => {
      alert('Venda realizada com sucesso!');
      this.vendaForm.reset();
      this.produtoDetalhes = null;
      this.valorVenda = 0;
      this.estoqueDisponivel = true;
    });
  }
}
