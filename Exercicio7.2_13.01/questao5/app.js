"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var readline_sync_1 = require("readline-sync");
var Estoque_1 = require("./Estoque");
var Produto_1 = require("./Produto");
var ProdutoPerecivel_1 = require("./ProdutoPerecivel");
var App = /** @class */ (function () {
    function App() {
        this._input = readline_sync_1.question;
        this._estoque = new Estoque_1.Estoque();
    }
    App.prototype.menu = function () {
        var opcao = '';
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
    };
    App.prototype.adicionarProduto = function () {
        console.log("\nAdicionar Produto:");
        var identificador = parseInt(this._input('Digite o identificador do produto: '));
        var descricao = this._input('Digite a descrição do produto: ');
        var quantidadeEstoque = parseInt(this._input('Digite a quantidade inicial em estoque: '));
        var tipo = parseInt(this._input('Digite o tipo de produto:\n1 - Comum\n2 - Perecível\nOpção: '));
        var produto;
        if (tipo === 1) {
            produto = new Produto_1.Produto(identificador, descricao, quantidadeEstoque);
        }
        else if (tipo === 2) {
            var dataValidade = new Date(this._input('Digite a data de validade (AAAA-MM-DD): '));
            produto = new ProdutoPerecivel_1.ProdutoPerecivel(identificador, descricao, quantidadeEstoque, dataValidade);
        }
        else {
            console.log("Tipo de produto inválido!");
            return;
        }
        try {
            this._estoque.addProduto(produto);
            console.log("Produto adicionado com sucesso!");
        }
        catch (error) {
            console.log(error.message);
        }
    };
    App.prototype.consultarProduto = function () {
        console.log("\nConsultar Produto:");
        var id = parseInt(this._input('Digite o identificador do produto: '));
        try {
            var produto = this._estoque.getById(id);
            console.log("Produto encontrado: ".concat(produto.toString()));
        }
        catch (error) {
            console.log(error.message);
        }
    };
    App.prototype.deletarProduto = function () {
        console.log("\nDeletar Produto:");
        var id = parseInt(this._input('Digite o identificador do produto: '));
        this._estoque.delete(id);
        console.log("Produto deletado com sucesso!");
    };
    App.prototype.reporEstoque = function () {
        console.log("\nRepor Estoque:");
        var id = parseInt(this._input('Digite o identificador do produto: '));
        var quantidade = parseInt(this._input('Digite a quantidade a ser reposta: '));
        try {
            this._estoque.repor(id, quantidade);
            console.log("Estoque reposto com sucesso!");
        }
        catch (error) {
            console.log(error.message);
        }
    };
    App.prototype.darBaixa = function () {
        console.log("\nDar Baixa no Estoque:");
        var id = parseInt(this._input('Digite o identificador do produto: '));
        var quantidade = parseInt(this._input('Digite a quantidade a ser retirada: '));
        try {
            this._estoque.darBaixa(id, quantidade);
            console.log("Baixa realizada com sucesso!");
        }
        catch (error) {
            console.log(error.message);
        }
    };
    App.prototype.listarVencidos = function () {
        console.log("\nListar Produtos Vencidos:");
        var produtosVencidos = this._estoque.getListaVencidos();
        if (produtosVencidos.length > 0) {
            console.log("Produtos vencidos:");
            produtosVencidos.forEach(function (produto) {
                return console.log("- ID: ".concat(produto.identificador, ", Descri\u00E7\u00E3o: ").concat(produto.descricao));
            });
        }
        else {
            console.log("Não há produtos vencidos.");
        }
    };
    return App;
}());
var app = new App();
app.menu();
