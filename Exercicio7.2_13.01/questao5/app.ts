/* Controle de estoque de produtos 

- Produto
-- identificador
-- descricao
-- quantidadeEstoque
----------------------
-- repor
-- darBaixa

*********************
- Produto perecivel
-- msm q produto
-- dataValidade
--------------------
-- isValid

*********************

- Estoque
-- listaProdutos
-------------------
-- add
-- getById
-- delete
-- repor
-- dar baixa
-- exists
-- listVencidos
*/

const prompt = require("prompt-sync")();
import {question} from "readline-sync";
import { Estoque } from "./Estoque";
import { Produto } from "./Produto";
import { ProdutoPerecivel } from "./ProdutoPerecivel";

class App{
    private _input= question;
    private _estoque: Estoque;

    constructor(){
        this._estoque = new Estoque();
    }

    public menu(){
        let opcao: string = '';

        do {
            console.log('\nBem-vindo ao Sistema de Gerenciamento de Estoque!');
            console.log('Escolha uma opção:');
            console.log('1 - Adicionar Produto');
            console.log('2 - Consultar Produto por ID');
            console.log('3 - Deletar Produto');
            console.log('4 - Repor Estoque');
            console.log('5 - Dar Baixa no Estoque');
            console.log('6 - Listar Produtos Vencidos');
            console.log('0 - Sair');
            opcao = this._input("Opção: ");
            switch (opcao) {
                case "1":
                    this.adicionarProduto();
                    break;
                case "2":
                    this.consultarProduto();
                    break;
                case "3":
                    this.deletarProduto();
                    break;
                case "4":
                    this.reporEstoque();
                    break;
                case "5":
                    this.darBaixa();
                    break;
                case "6":
                    this.listarVencidos();
                    break;
                case "0":
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida!");
            }
            this._input("Operação finalizada. Pressione <Enter> para continuar.");
        } while (opcao !== "0");
        
        console.log("Aplicação encerrada.");
    }


    
    adicionarProduto(): void {
        console.log("\nAdicionar Produto:");
        const identificador: number = parseInt(this._input('Digite o identificador do produto: '));
        const descricao: string = this._input('Digite a descrição do produto: ');
        const quantidadeEstoque: number = parseInt(this._input('Digite a quantidade inicial em estoque: '));
        const tipo: number = parseInt(this._input('Digite o tipo de produto:\n1 - Comum\n2 - Perecível\nOpção: '));
        

        let produto: Produto;
        if (tipo === 1) {
            produto = new Produto(identificador, descricao, quantidadeEstoque);
            
        } else if (tipo === 2) {
            const dataValidade: Date = new Date(this._input('Digite a data de validade (AAAA-MM-DD): '));
            produto = new ProdutoPerecivel(identificador, descricao, quantidadeEstoque, dataValidade);
        } else {
            console.log("Tipo de produto inválido!");
            return;
        }

        try {
            this._estoque.addProduto(produto);
            console.log("Produto adicionado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    consultarProduto(): void {
        console.log("\nConsultar Produto:");
        const id: number = parseInt(this._input('Digite o identificador do produto: '));
        try {
            const produto = this._estoque.getById(id);
            console.log(`Produto encontrado: ${produto.toString()}`);
        } catch (error) {
            console.log(error.message);
        }
}

    deletarProduto(): void {
        console.log("\nDeletar Produto:");
        const id: number = parseInt(this._input('Digite o identificador do produto: '));
        this._estoque.delete(id);
        console.log("Produto deletado com sucesso!");
    }

    reporEstoque(): void {
        console.log("\nRepor Estoque:");
        const id: number = parseInt(this._input('Digite o identificador do produto: '));
        const quantidade: number = parseInt(this._input('Digite a quantidade a ser reposta: '));
        try {
            this._estoque.repor(id, quantidade);
            console.log("Estoque reposto com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    darBaixa(): void {
        console.log("\nDar Baixa no Estoque:");
        const id: number = parseInt(this._input('Digite o identificador do produto: '));
        const quantidade: number = parseInt(this._input('Digite a quantidade a ser retirada: '));
        try {
            this._estoque.darBaixa(id, quantidade);
            console.log("Baixa realizada com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    listarVencidos(): void {
        console.log("\nListar Produtos Vencidos:");
        const produtosVencidos = this._estoque.getListaVencidos();
        if (produtosVencidos.length > 0) {
            console.log("Produtos vencidos:");
            produtosVencidos.forEach((produto) =>
                console.log(`- ID: ${produto.identificador}, Descrição: ${produto.descricao}`)
            );
        } else {
            console.log("Não há produtos vencidos.");
        }
    }

}


const app: App = new App();
app.menu();
