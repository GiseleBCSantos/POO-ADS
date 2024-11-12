var Pessoa = /** @class */ (function () {
    function Pessoa(nome, payment, linguagem) {
        this.nome = nome;
        this.payment = payment;
        this.linguagem = linguagem;
    }
    Pessoa.prototype.show_pessoa = function () {
        console.log("\n".concat(this.nome, "\nMy payment time is ").concat(this.payment, "\nand\nmy preffered language is ").concat(this.linguagem, "\n"));
    };
    return Pessoa;
}());
var ely = new Pessoa("Ely", 120.56, "Typescript");
ely.show_pessoa();
