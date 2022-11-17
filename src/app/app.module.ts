import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import ptBr from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TabelaComponent } from './tabela/tabela.component';
import { HomeComponent } from './home/home.component';
import { FormatarCpfPipe } from './pipes/formatar-cpf.pipe';
import { FormatarTelefonePipe } from './pipes/formatar-telefone.pipe';
import { ContadorComponent } from './contador/contador.component';

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
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
