import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor() { }

  public clientes: any[] = [
    {id: 1, nome: "Leonardo", telefone: 1144448888, endereco: "Rua teste 321", data: new Date(), valor: 22.76, cpf: 55544433321},
    {id: 2, nome: "Asdrubal", telefone: 1143348888, endereco: "Rua teste 321", data: new Date(), valor: 4700, cpf: 88877711123},
    {id: 3, nome: "Catalista", telefone: 1112428888, endereco: "Rua teste 321", data: new Date(), valor: 2387.90, cpf: 95135748621},
  ]

  ngOnInit(): void {
  }

}
