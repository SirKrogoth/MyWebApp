(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./AngularJS/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./AngularJS/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./AngularJS/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./AngularJS/app/Loja/efetivarCompra/efetivarCompra.component.html":
/*!*************************************************************************!*\
  !*** ./AngularJS/app/Loja/efetivarCompra/efetivarCompra.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div *ngIf=\"mensagem\" class=\"alert alert-danger\">{{mensagem}}</div>\r\n    <h3>Efetivar Compra</h3>\r\n\r\n    <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n            <tr *ngFor=\"let item of data.pedido.ItensPedidos\">\r\n                <td><img src=\"/img/lgk10.jpg\" width=\"200\" height=\"200\" /></td>\r\n                <td>{{item.Produto.nome}}</td>\r\n                <td>{{item.quantidade}}</td>\r\n                <td>{{item.Produto.preco | currency: \"R$\" : true}}</td>\r\n                <td>{{(item.Produto.preco * item.quantidade)| currency: \"R$\" : true}}</td>\r\n            </tr>\r\n        </thead>\r\n    </table>\r\n\r\n    <div class=\"col-xs-4 col-xs-offset-8 text-right\">\r\n        <table class=\"table table-condensed\">\r\n            <tr>\r\n                <td>Total:</td>\r\n                <td>{{data.pedido.total | currency: \"R$\" : true}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Frete</td>\r\n                <td>R$ 0.00</td>\r\n            </tr>\r\n        </table>\r\n        <button class=\"btn btn-success\" (click)=\"onEfetivarComprar()\">Comprar</button>\r\n        <button class=\"btn btn-danger\" (click)=\"onCancelarCompra()\" routerLink=\"\">Cancelar</button>\r\n        <a routerLink=\"\" class=\"btn btn-info\">Voltar</a>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./AngularJS/app/Loja/efetivarCompra/efetivarCompra.component.ts":
/*!***********************************************************************!*\
  !*** ./AngularJS/app/Loja/efetivarCompra/efetivarCompra.component.ts ***!
  \***********************************************************************/
/*! exports provided: EfetivarCompra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfetivarCompra", function() { return EfetivarCompra; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Servicos_dataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Servicos/dataServices */ "./AngularJS/app/Servicos/dataServices.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EfetivarCompra = /** @class */ (function () {
    function EfetivarCompra(data, router) {
        this.data = data;
        this.router = router;
    }
    EfetivarCompra.prototype.onEfetivarComprar = function () {
        var _this = this;
        this.data.efetivarComprar()
            .subscribe(function (sucesso) {
            if (sucesso) {
                _this.router.navigate([""]);
            }
        }, function (erro) { return _this.mensagem = "Falha ao salvar pedido"; });
    };
    EfetivarCompra.prototype.onCancelarCompra = function () {
        this.data.pedido.ItensPedidos = null;
    };
    EfetivarCompra = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "efetivar",
            template: __webpack_require__(/*! ./efetivarCompra.component.html */ "./AngularJS/app/Loja/efetivarCompra/efetivarCompra.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Servicos_dataServices__WEBPACK_IMPORTED_MODULE_2__["DataServices"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EfetivarCompra);
    return EfetivarCompra;
}());



/***/ }),

/***/ "./AngularJS/app/Loja/listaProduto.component.css":
/*!*******************************************************!*\
  !*** ./AngularJS/app/Loja/listaProduto.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".produto-info img{\r\n       margin: 0 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJKUy9hcHAvTG9qYS9saXN0YVByb2R1dG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtPQUNPLGFBQWE7QUFDcEIiLCJmaWxlIjoiQW5ndWxhckpTL2FwcC9Mb2phL2xpc3RhUHJvZHV0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1dG8taW5mbyBpbWd7XHJcbiAgICAgICBtYXJnaW46IDAgMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./AngularJS/app/Loja/listaProduto.component.html":
/*!********************************************************!*\
  !*** ./AngularJS/app/Loja/listaProduto.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"produto-info col-xs-4 well\" *ngFor=\"let p of produtos\">\r\n        <img src=\"img/lgk10.jpg\" width=\"225\" height=\"225\" alt=\"Celular LG K10\" />\r\n        \r\n        <h4>{{p.nome}}</h4>        \r\n        <h2><strong>{{p.preco | currency: \"R$\":true}}</strong></h2>\r\n\r\n        <button id=\"meu-button\" class=\"btn btn-success btn-sm\" (click)=\"adicionarProduto(p)\">Comprar</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./AngularJS/app/Loja/listaProduto.component.ts":
/*!******************************************************!*\
  !*** ./AngularJS/app/Loja/listaProduto.component.ts ***!
  \******************************************************/
/*! exports provided: ListaProduto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProduto", function() { return ListaProduto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Servicos_dataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Servicos/dataServices */ "./AngularJS/app/Servicos/dataServices.ts");



var ListaProduto = /** @class */ (function () {
    function ListaProduto(data) {
        this.data = data;
        this.produtos = [];
        this.produtos = data.produtos;
    }
    ListaProduto.prototype.ngOnInit = function () {
        var _this = this;
        this.data.carregarProdutos()
            .subscribe(function () { return _this.produtos = _this.data.produtos; });
    };
    ListaProduto.prototype.adicionarProduto = function (produto) {
        this.data.adicionarProduto(produto);
    };
    ListaProduto = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "lista-produto",
            template: __webpack_require__(/*! ./listaProduto.component.html */ "./AngularJS/app/Loja/listaProduto.component.html"),
            styles: [__webpack_require__(/*! ./listaProduto.component.css */ "./AngularJS/app/Loja/listaProduto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Servicos_dataServices__WEBPACK_IMPORTED_MODULE_2__["DataServices"]])
    ], ListaProduto);
    return ListaProduto;
}());



/***/ }),

/***/ "./AngularJS/app/Loja/loja.component.html":
/*!************************************************!*\
  !*** ./AngularJS/app/Loja/loja.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-8\">\r\n        <lista-produto></lista-produto>\r\n    </div>\r\n    <div class=\"col-xs-4\">\r\n        <div>\r\n            <div class=\"well well-sm\">\r\n                <carrinho></carrinho>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./AngularJS/app/Loja/loja.component.ts":
/*!**********************************************!*\
  !*** ./AngularJS/app/Loja/loja.component.ts ***!
  \**********************************************/
/*! exports provided: Loja */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loja", function() { return Loja; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Loja = /** @class */ (function () {
    function Loja() {
    }
    Loja = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "loja",
            template: __webpack_require__(/*! ./loja.component.html */ "./AngularJS/app/Loja/loja.component.html")
        })
    ], Loja);
    return Loja;
}());



/***/ }),

/***/ "./AngularJS/app/Servicos/dataServices.ts":
/*!************************************************!*\
  !*** ./AngularJS/app/Servicos/dataServices.ts ***!
  \************************************************/
/*! exports provided: DataServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServices", function() { return DataServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _modelos_pedidos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modelos/pedidos */ "./AngularJS/app/modelos/pedidos.ts");





var DataServices = /** @class */ (function () {
    function DataServices(http) {
        this.http = http;
        this.pedido = new _modelos_pedidos__WEBPACK_IMPORTED_MODULE_4__["Pedido"];
    }
    DataServices.prototype.carregarProdutos = function () {
        var _this = this;
        return this.http.get("/api/produto")
            .map(function (result) { return _this.produtos = result.json(); });
    };
    DataServices.prototype.adicionarProduto = function (produto) {
        var itemSelecionado = this.pedido.ItensPedidos.find(function (i) { return i.Produto.id == produto.id; });
        var item;
        if (itemSelecionado) {
            itemSelecionado.quantidade++;
        }
        else {
            item = new _modelos_pedidos__WEBPACK_IMPORTED_MODULE_4__["ItemPedido"]();
            item.Produto.id = produto.id;
            item.Produto.nome = produto.nome;
            item.Produto.descricao = produto.descricao;
            item.Produto.preco = produto.preco;
            item.quantidade = 1;
            this.pedido.ItensPedidos.push(item);
        }
    };
    DataServices.prototype.efetivarComprar = function () {
        var _this = this;
        return this.http.post("/api/pedido", this.pedido)
            .map(function (resposta) {
            _this.pedido = new _modelos_pedidos__WEBPACK_IMPORTED_MODULE_4__["Pedido"]();
            return true;
        });
    };
    DataServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataServices);
    return DataServices;
}());



/***/ }),

/***/ "./AngularJS/app/app.component.html":
/*!******************************************!*\
  !*** ./AngularJS/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n    \r\n</router-outlet>"

/***/ }),

/***/ "./AngularJS/app/app.component.ts":
/*!****************************************!*\
  !*** ./AngularJS/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Parangarico tirimirruaro!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./AngularJS/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./AngularJS/app/app.module.ts":
/*!*************************************!*\
  !*** ./AngularJS/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./AngularJS/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Loja_listaProduto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loja/listaProduto.component */ "./AngularJS/app/Loja/listaProduto.component.ts");
/* harmony import */ var _Servicos_dataServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Servicos/dataServices */ "./AngularJS/app/Servicos/dataServices.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _loja_carrinho_carrinho_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loja/carrinho/carrinho.component */ "./AngularJS/app/loja/carrinho/carrinho.component.ts");
/* harmony import */ var _Loja_loja_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Loja/loja.component */ "./AngularJS/app/Loja/loja.component.ts");
/* harmony import */ var _Loja_efetivarCompra_efetivarCompra_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Loja/efetivarCompra/efetivarCompra.component */ "./AngularJS/app/Loja/efetivarCompra/efetivarCompra.component.ts");











var router = [
    { path: "", component: _Loja_loja_component__WEBPACK_IMPORTED_MODULE_9__["Loja"] },
    { path: "efetivarCompra", component: _Loja_efetivarCompra_efetivarCompra_component__WEBPACK_IMPORTED_MODULE_10__["EfetivarCompra"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _Loja_listaProduto_component__WEBPACK_IMPORTED_MODULE_5__["ListaProduto"],
                _loja_carrinho_carrinho_component__WEBPACK_IMPORTED_MODULE_8__["Carrinho"],
                _Loja_loja_component__WEBPACK_IMPORTED_MODULE_9__["Loja"],
                _Loja_efetivarCompra_efetivarCompra_component__WEBPACK_IMPORTED_MODULE_10__["EfetivarCompra"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(router, {
                    useHash: true,
                    enableTracing: false
                })
            ],
            providers: [_Servicos_dataServices__WEBPACK_IMPORTED_MODULE_6__["DataServices"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./AngularJS/app/loja/carrinho/carrinho.component.html":
/*!*************************************************************!*\
  !*** ./AngularJS/app/loja/carrinho/carrinho.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 align=\"center\">Carrinho de Compras</h3>\r\n<div>Total: {{data.pedido.total | currency: \"R$\": true}}</div>\r\n\r\n<table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td><strong>Nome</strong></td>\r\n            <td><strong>Quantidade</strong></td>\r\n            <td><strong>Preço</strong></td>\r\n            <td><strong>Total</strong></td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of data.pedido.ItensPedidos\">\r\n            <td>{{item.Produto.nome}}</td>\r\n            <td>{{item.quantidade}}</td>\r\n            <td>{{item.Produto.preco | currency: \"R$\": true}}</td>\r\n            <td>{{(item.Produto.preco * item.quantidade) | currency: \"R$\": true}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<a routerLink=\"efetivarCompra\" class=\"btn btn-success\" *ngIf=\"data.pedido.ItensPedidos.length > 0\">Efetivar Compra</a>"

/***/ }),

/***/ "./AngularJS/app/loja/carrinho/carrinho.component.ts":
/*!***********************************************************!*\
  !*** ./AngularJS/app/loja/carrinho/carrinho.component.ts ***!
  \***********************************************************/
/*! exports provided: Carrinho */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carrinho", function() { return Carrinho; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Servicos_dataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Servicos/dataServices */ "./AngularJS/app/Servicos/dataServices.ts");



var Carrinho = /** @class */ (function () {
    function Carrinho(data) {
        this.data = data;
    }
    Carrinho = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "carrinho",
            template: __webpack_require__(/*! ./carrinho.component.html */ "./AngularJS/app/loja/carrinho/carrinho.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Servicos_dataServices__WEBPACK_IMPORTED_MODULE_2__["DataServices"]])
    ], Carrinho);
    return Carrinho;
}());



/***/ }),

/***/ "./AngularJS/app/modelos/pedidos.ts":
/*!******************************************!*\
  !*** ./AngularJS/app/modelos/pedidos.ts ***!
  \******************************************/
/*! exports provided: Pedido, ItemPedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pedido", function() { return Pedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPedido", function() { return ItemPedido; });
/* harmony import */ var _modelos_produto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modelos/produto */ "./AngularJS/app/modelos/produto.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var Pedido = /** @class */ (function () {
    function Pedido() {
        this.ItensPedidos = new Array();
    }
    Object.defineProperty(Pedido.prototype, "total", {
        get: function () {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["sum"](lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.ItensPedidos, function (i) { return i.Produto.preco * i.quantidade; }));
        },
        enumerable: true,
        configurable: true
    });
    return Pedido;
}());

var ItemPedido = /** @class */ (function () {
    function ItemPedido() {
        this.Produto = new _modelos_produto__WEBPACK_IMPORTED_MODULE_0__["Produto"]();
    }
    return ItemPedido;
}());



/***/ }),

/***/ "./AngularJS/app/modelos/produto.ts":
/*!******************************************!*\
  !*** ./AngularJS/app/modelos/produto.ts ***!
  \******************************************/
/*! exports provided: Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());



/***/ }),

/***/ "./AngularJS/environments/environment.ts":
/*!***********************************************!*\
  !*** ./AngularJS/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./AngularJS/main.ts":
/*!***************************!*\
  !*** ./AngularJS/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./AngularJS/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./AngularJS/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./AngularJS/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nicolas\source\repos\MyWebApp2\MyWebApp\AngularJS\main.ts */"./AngularJS/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map