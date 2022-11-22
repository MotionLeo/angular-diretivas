import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import ptBr from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TabelaComponent } from './paginas/tabela/tabela.component';
import { HomeComponent } from './paginas/home/home.component';
import { FormatarTelefonePipe } from './pipes/formatar-telefone.pipe';
import { ContadorComponent } from './paginas/contador/contador.component';
import { SistemaDeEstoqueComponent } from './paginas/sistema-de-estoque/sistema-de-estoque.component';
import { FormsModule } from '@angular/forms';
import { ListaEstoqueComponent } from './paginas/lista-estoque/lista-estoque.component';
import { FormatarCpfPipe } from './pipes/formatar-cpf.pipe';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    TabelaComponent,
    HomeComponent,
    FormatarCpfPipe,
    FormatarTelefonePipe,
    ContadorComponent,
    SistemaDeEstoqueComponent,
    ListaEstoqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
