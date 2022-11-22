import { Component, OnInit } from '@angular/core';
import { EstoqueServico } from 'src/app/services/EstoqueServico';
import { Estoque } from '../../models/estoque';

@Component({
  selector: 'app-sistema-de-estoque',
  templateUrl: './sistema-de-estoque.component.html',
  styleUrls: ['./sistema-de-estoque.component.css']
})
export class SistemaDeEstoqueComponent implements OnInit {

  public estoque:Estoque = {} as Estoque;

  public titulo : String = "Novo item"; 

  textoDoBotao = "Cadastrar";

  isDisabled = true;

  ngOnInit(): void {
  }

  cadastroNoEstoque(){
    /*if(this.estoque.id > 0){
      for(let itemParaAlterar of this.estoqueDeItens){
        if(itemParaAlterar.id === this.estoque.id){
          itemParaAlterar.id = this.estoque.id;
          itemParaAlterar.nome = this.estoque.nome;
          itemParaAlterar.descricao = this.estoque.descricao;
          itemParaAlterar.preco = this.estoque.preco;
          this.textoDoBotao = "Cadastrar";

          break;
        }
      }
      return
    }*/
    
    EstoqueServico.setEstoque({
      id: 0,
      nome: this.estoque.nome,
      descricao: this.estoque.descricao,
      preco: this.estoque.preco,
    });
  }

  /*alteraNoEstoque(id : Number){
    for(let itemParaAlterar of this.estoqueDeItens){
      if(itemParaAlterar.id === id){
        this.estoque.id = itemParaAlterar.id;
        this.estoque.nome = itemParaAlterar.nome;
        this.estoque.descricao = itemParaAlterar.descricao;
        this.estoque.preco = itemParaAlterar.preco;
        this.textoDoBotao = "Alterar";

        break;
      }
    }
  }

  excluiNoEstoque(id : Number){
    for(let itemParaExcluir of this.estoqueDeItens){
      if(itemParaExcluir.id === id){
        //let indiceItem:Number= this.estoqueDeItens.indexOf();
        //this.estoqueDeItens.splice(itemParaExcluir, 1);
        //delete this.estoqueDeItens[itemParaExcluir.id]
        break;
      }
    }
  }*/
}
