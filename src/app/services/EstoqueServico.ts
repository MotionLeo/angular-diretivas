import { Estoque } from "../models/estoque";

export class EstoqueServico{
    private static estoque : Estoque[] = []

    //Lê o estoque
    public static getEstoque() : Estoque[]{
        return EstoqueServico.estoque;
    }
    
    //Adiciona item no estoque
    public static setEstoque(estoque:Estoque) : void{

        estoque.id = EstoqueServico.getEstoque().length + 1;
        EstoqueServico.estoque.push(estoque);
    }

    //Edita um item do estoque
    public static editEstoque(estoque:Estoque) : void{
        for(let i=0; i< EstoqueServico.estoque.length; i++){
            let estoqueDb = EstoqueServico.estoque[i];
            if(estoqueDb.id === estoque.id){
                estoqueDb = {
                    ...estoque
                };
                break;
            }
        }
    }

    //Deleta um item do estoque
    public static deleteDoEstoque(estoque:Estoque) : void{
        let listaNova = [];
        for(let i=0; i< EstoqueServico.estoque.length; i++){
            let estoqueDb = EstoqueServico.estoque[i];
            if(estoqueDb.id != estoque.id){
                listaNova.push(estoqueDb);
                break;
            }
        }
        EstoqueServico.estoque = listaNova;
    }
}