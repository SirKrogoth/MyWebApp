using Microsoft.AspNetCore.Mvc;
using MyWebApp.AcessaDados;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.Controllers
{
    [Route("api/[Controller]")]//Configurado roteamento
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepository _produtoRepository;

        public ProdutoController(IProdutoRepository produtoRepository)
        {
            _produtoRepository = produtoRepository;
        }

        [HttpGet]//Método para comunicar
        public IActionResult Get()
        {
            try
            {
                return Ok(_produtoRepository.ListarProdutos());
            }
            catch (Exception ex)
            {
                return BadRequest("Erro apresentado: " + ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult GET(int id)
        {
            try
            {
                var produto = _produtoRepository.ObterProdutoPorID(id);

                return Ok(produto);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}
