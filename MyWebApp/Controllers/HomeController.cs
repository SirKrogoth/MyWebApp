using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyWebApp.AcessaDados;

namespace MyWebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProdutoRepository _repository;

        public HomeController(IProdutoRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Index()
        {
            return View(_repository.ListarProdutos());
        }

        public string ObterNomePessoal()
        {
            return "João Rafael Menezes";
        }

        public string ObterNomeBebe()
        {
            return "Nícolas da Silva Menezes";
        }
    }
}
