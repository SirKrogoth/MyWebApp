using Microsoft.AspNetCore.Mvc;
using MyWebApp.AcessaDados;
using MyWebApp.AcessaDados.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.Controllers
{
    [Route("api/[Controller]")]
    public class PedidoController : Controller
    {
        private IPedidoRepository _pedidoRepository;

        public PedidoController(IPedidoRepository pedidoRepository)
        {
            _pedidoRepository = pedidoRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_pedidoRepository.ListarPedidos());
            }
            catch (Exception ex)
            {
                return BadRequest("Erro não identificado: " + ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Pedido pedido)
        {
            try
            {
                if(ModelState.IsValid)
                    _pedidoRepository.Salvar(pedido);

                return Created("api/Pedido", pedido);
            }
            catch (Exception ex)
            {
                return BadRequest("Erro não identificado: " + ex.Message);
            }
        }
    }
}