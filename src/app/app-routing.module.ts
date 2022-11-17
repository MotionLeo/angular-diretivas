import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { HomeComponent } from './home/home.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'tabela', component: TabelaComponent},
  {path:'contador', component: ContadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
