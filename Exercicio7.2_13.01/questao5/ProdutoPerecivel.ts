import { Produto } from "./Produto";

// - Produto perecivel
// -- msm q produto
// -- dataValidade
// --------------------
// -- isValid

export class ProdutoPerecivel extends Produto{
    private _dataValidade: Date;

    constructor(identificador: number, descricao: string, quantidadeEstoque: number, dataValidade: Date){
        super(identificador, descricao, quantidadeEstoque);
        this._dataValidade = dataValidade;
    }

    public ehValido(dataAtual: Date): boolean{
        return this._dataValidade >= dataAtual;
    }
}