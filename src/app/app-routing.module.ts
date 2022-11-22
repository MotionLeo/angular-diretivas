import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './paginas/contador/contador.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListaEstoqueComponent } from './paginas/lista-estoque/lista-estoque.component';
import { SistemaDeEstoqueComponent } from './paginas/sistema-de-estoque/sistema-de-estoque.component';
import { TabelaComponent } from './paginas/tabela/tabela.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'tabela', component: TabelaComponent},
  {path:'contador', component: ContadorComponent},
  {path:'sistema-estoque', component: SistemaDeEstoqueComponent},
  {path:'lista-estoque', component: ListaEstoqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
