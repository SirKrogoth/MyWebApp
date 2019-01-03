$(document).ready(function () {

    var $botao = $("#botao");

    $botao.on("click", function () {

        alert("Alerta executado dentro de um EventListener");

    });

    var $precos = $(".preco-produto li");

    $precos.on("click", function () {
        alert($(this).text());
    });

    var $login = $("#login");
    var $popupform = $("#.popup-form");

    $login.on("click", function () {

        alert("Alerta TOGGLE");
        //$popupForm.toggle();

    });

});