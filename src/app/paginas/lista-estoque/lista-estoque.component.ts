import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Estoque } from 'src/app/models/estoque';
import { EstoqueServico } from 'src/app/services/EstoqueServico';

@Component({
  selector: 'app-lista-estoque',
  templateUrl: './lista-estoque.component.html',
  styleUrls: ['./lista-estoque.component.css']
})
export class ListaEstoqueComponent implements OnInit {

  public estoqueDeItens:Estoque[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public estoque:Estoque[] = EstoqueServico.getEstoque();

  novoItem(){
    this.router.navigateByUrl("/sistema-estoque")
  }
}
