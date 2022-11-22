import { Component, OnInit } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  MEMES = MEMES_AGRUPADOS_POR_CATEGORIA;
  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

}
