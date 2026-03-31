import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Car } from "@/data/cars";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";

const CarCard = ({ car }: { car: Car }) => {
  const { addToCart, toggleFavorite, isFavorite } = useStore();
  const fav = isFavorite(car.id);

  return (
    <div className="card-car group">
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(car.id);
              toast(fav ? "Removed from favorites" : "Added to favorites ❤️");
            }}
            className="w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Heart size={16} className={fav ? "fill-primary text-primary" : ""} />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {car.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{car.brand}</p>
            <Link to={`/product/${car.id}`}>
              <h3 className="font-display text-lg font-semibold text-foreground hover:text-primary transition-colors">
                {car.name}
              </h3>
            </Link>
          </div>
          <p className="text-primary font-bold text-lg">
            ${car.price.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span>{car.horsepower} HP</span>
          <span>•</span>
          <span>{car.acceleration}</span>
          <span>•</span>
          <span>{car.year}</span>
        </div>
        <div className="flex gap-2">
          <Link to={`/product/${car.id}`} className="flex-1">
            <button className="w-full btn-outline-gold text-sm py-2">View Details</button>
          </Link>
          <button
            onClick={() => {
              addToCart(car);
              toast.success(`${car.name} added to cart!`);
            }}
            className="w-10 h-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
