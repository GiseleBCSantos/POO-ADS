var _a;
var Postagem = /** @class */ (function () {
    function Postagem(id, texto) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0; // Inicializa com 0 curtidas
    }
    Postagem.prototype.curtir = function () {
        this.quantidadeCurtidas++;
    };
    Postagem.prototype.toString = function () {
        return "Postagem de ID ".concat(this.id, " \n\"").concat(this.texto, "\" \nCurtidas: ").concat(this.quantidadeCurtidas, "\n");
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.postagens = [];
    }
    Microblog.prototype.adicionarPostagem = function (postagem) {
        this.postagens.push(postagem);
    };
    Microblog.prototype.excluirPostagem = function (id) {
        var indice = -1;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id === id) {
                indice = i;
                break;
            }
        }
        if (indice !== -1) {
            this.postagens.splice(indice, 1);
        }
    };
    Microblog.prototype.postagemMaisCurtida = function () {
        if (this.postagens.length === 0) {
            return null;
        }
        var maisCurtida = this.postagens[0];
        for (var i = 1; i < this.postagens.length; i++) {
            if (this.postagens[i].quantidadeCurtidas > maisCurtida.quantidadeCurtidas) {
                maisCurtida = this.postagens[i];
            }
        }
        return maisCurtida;
    };
    Microblog.prototype.curtirPostagem = function (id) {
        for (var _i = 0, _a = this.postagens; _i < _a.length; _i++) {
            var postagem = _a[_i];
            if (postagem.id === id) {
                postagem.curtir();
                break;
            }
        }
    };
    Microblog.prototype.toString = function () {
        if (this.postagens.length === 0) {
            return "Nenhuma postagem disponível.";
        }
        var result = "";
        for (var _i = 0, _a = this.postagens; _i < _a.length; _i++) {
            var postagem = _a[_i];
            result += postagem.toString() + "\n";
        }
        return result.trim();
    };
    return Microblog;
}());
// Exemplo de uso
var microblog = new Microblog();
var postagem1 = new Postagem(1, "Aprendendo TypeScript!");
var postagem2 = new Postagem(2, "Hoje é um ótimo dia para programar.");
var postagem3 = new Postagem(3, "Dicas de produtividade para devs.");
microblog.adicionarPostagem(postagem1);
microblog.adicionarPostagem(postagem2);
microblog.adicionarPostagem(postagem3);
console.log("Postagens iniciais:");
console.log(microblog.toString());
microblog.curtirPostagem(1);
microblog.curtirPostagem(1);
microblog.curtirPostagem(2);
console.log("\nPostagens após curtidas:");
console.log(microblog.toString());
console.log("\nPostagem mais curtida:");
console.log((_a = microblog.postagemMaisCurtida()) === null || _a === void 0 ? void 0 : _a.toString());
microblog.excluirPostagem(2);
console.log("\nPostagens após exclusão:");
console.log(microblog.toString());
