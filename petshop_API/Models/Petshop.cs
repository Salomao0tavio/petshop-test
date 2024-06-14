namespace petshop_API.Models
{
    public class Petshop
    {
        public string Id { get; init; }
        public string Name { get; init; }
        public double Distance { get; init; }
        public double SmallDogWeekdayPrice { get; init; }
        public double LargeDogWeekdayPrice { get; init; }
        public double SmallDogWeekendPrice { get; init; }
        public double LargeDogWeekendPrice { get; init; }
    }
}
