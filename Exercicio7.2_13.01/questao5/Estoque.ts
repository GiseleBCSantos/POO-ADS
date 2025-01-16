import { Produto } from "./Produto";
import { ProdutoPerecivel } from "./ProdutoPerecivel";

// - Estoque
// -- listaProdutos
// -------------------
// -- add
// -- getById
// -- delete
// -- repor
// -- dar baixa
// -- exists
// -- listVencidos

export class Estoque{
    private _listaProdutos: Produto[] = [];

    public addProduto(produto: Produto): void{
        this.getProdutos();
        if (this.jaCadastrado(produto.identificador, produto.descricao)){
            throw new Error("Produto ja cadastrado!")
        }

        this._listaProdutos.push(produto);
    }

    public getProdutos(){
        this._listaProdutos.forEach((produto: Produto) => console.log(produto.toString()))
    }

    public getById(id: number){
        const produto: Produto | undefined = this._listaProdutos.filter((produto: Produto) => produto.identificador === id)[0];
        if (!produto){
            throw new Error("Produto nao cadastrado!")
        }

        return produto;
    }

    public delete(id:number){
        this._listaProdutos = this._listaProdutos.filter((produto: Produto) => produto.identificador !== id);
    }

    public repor(id: number, quantidade: number){
        const produto: Produto | undefined = this.getById(id);
        if (!produto){
            throw new Error("Produto nao cadastrado!")
        }
        produto.repor(quantidade);
    }

    public darBaixa(id: number, quantidade: number){
        const produto: Produto | undefined = this.getById(id);
        if (!produto){
            throw new Error("Produto nao cadastrado!")
        }

        try{
            produto.darBaixa(quantidade);
        } catch (e){
            throw new Error(e.message);
        }
    }

    public getListaVencidos(): Produto[]{
        const produtosVencidos: ProdutoPerecivel[] = []
        this._listaProdutos.forEach((produto: Produto) => {
            if (produto instanceof ProdutoPerecivel && !produto.ehValido(new Date())){
                produtosVencidos.push(produto)
            }
        })

        return produtosVencidos;
    }

    private jaCadastrado(id: number, descricao: string){
        const produtoExistente = this._listaProdutos.find((produto:Produto) => produto.identificador === id && produto.descricao == descricao)
        return produtoExistente === null;
    }
}