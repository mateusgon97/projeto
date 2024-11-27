import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LancamentoVendasComponent } from './pages/lancamento-vendas/lancamento-vendas.component';
import { VisualizacaoVendasComponent } from './pages/lancamento-vendas/visualizacao-vendas.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota raiz apontando para HomeComponent
  { path: 'lancamento-vendas', component: LancamentoVendasComponent },
  { path: 'visualizacao-vendas', component: VisualizacaoVendasComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
