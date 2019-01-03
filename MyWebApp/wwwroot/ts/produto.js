var Produto = /** @class */ (function () {
    function Produto() {
        this.id = 0;
    }
    Produto.prototype.obterNome = function () {
        return this.nome;
    };
    Produto.prototype.obterID = function () {
        return this.id;
    };
    Object.defineProperty(Produto.prototype, "descricao", {
        get: function () {
            return this.nome;
        },
        set: function (val) {
        },
        enumerable: true,
        configurable: true
    });
    return Produto;
}());
//# sourceMappingURL=produto.js.map