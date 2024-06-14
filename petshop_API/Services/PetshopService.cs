using petshop_API.Models;

namespace petshop_API.Services
{
    public class PetshopService
    {
        public double CalculateTotalPrice(Petshop petshop, int smallDogs, int largeDogs, bool isWeekend)
        {
            if (isWeekend)
            {
                return (petshop.SmallDogWeekendPrice * smallDogs) + (petshop.LargeDogWeekendPrice * largeDogs);
            }
            return (petshop.SmallDogWeekdayPrice * smallDogs) + (petshop.LargeDogWeekdayPrice * largeDogs);
        }
    }
}
