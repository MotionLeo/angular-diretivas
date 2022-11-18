import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';

  valorContador = 10;
  noClique(novoValor:number){
    console.log('Atualizou o contador ', novoValor);
  }
}
