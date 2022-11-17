import { outputAst, ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  @Output() contadorMudou = new EventEmitter();
  @Input() contadorNumerico = 0;

  aumentaUm(){
    this.contadorNumerico = this.contadorNumerico + 1;
    this.contadorMudou.emit(this.contadorNumerico);
  }
  diminuiUm(){
    this.contadorNumerico = this.contadorNumerico - 1;
    this.contadorMudou.emit(this.contadorNumerico);
  }
}
