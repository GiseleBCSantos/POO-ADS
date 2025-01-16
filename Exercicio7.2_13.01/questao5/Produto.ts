// - Produto
// -- identificador
// -- descricao
// -- quantidadeEstoque
// ----------------------
// -- repor
// -- darBaixa

export class Produto{
    public identificador: number;
    public descricao: string;
    private _quantidadeEstoque: number;

    constructor(identificador: number, descricao: string, quantidadeEstoque: number){
        this.identificador = identificador;
        this.descricao = descricao;
        this._quantidadeEstoque = quantidadeEstoque;
    }

    public repor(value: number){
        this._quantidadeEstoque += value;
    }

    public darBaixa(value:number){
        if (value > this._quantidadeEstoque){
            throw new Error("Quantidade de produtos indisponivel!")
        }

        this._quantidadeEstoque -= value;
    }

    public toString(){
        return `\nId: ${this.identificador}\nDescricao: ${this.descricao}\nQuantidade em estoque: ${this._quantidadeEstoque}`
    }

}