namespace petshop_API.Dtos
{
    public class VisitRequest
    {
        /// <summary>
        /// Data da visita.
        /// </summary>
        public DateTime Date { get; set; }

        /// <summary>
        /// Quantidade de cães pequenos.
        /// </summary>
        public int? SmallDogs { get; set; }

        /// <summary>
        /// Quantidade de cães grandes.
        /// </summary>
        public int? LargeDogs { get; set; }
    }
}

