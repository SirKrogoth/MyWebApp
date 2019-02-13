namespace MyWebApp.AcessaDados.Entidades
{
    public class ItemPedido
    {
        public int id { get; set; }
        public Produto Produto { get; set; }
        public int quantidade { get; set; }
    }
}
