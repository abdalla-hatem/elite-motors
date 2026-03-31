import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingCart, Gauge, Zap, Settings, Fuel } from "lucide-react";
import { cars } from "@/data/cars";
import { useStore } from "@/store/useStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));
  const { addToCart, toggleFavorite, isFavorite } = useStore();

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Car Not Found</h1>
          <Link to="/products" className="btn-gold">Back to Collection</Link>
        </div>
      </div>
    );
  }

  const fav = isFavorite(car.id);
  const specs = [
    { icon: Gauge, label: "Top Speed", value: car.topSpeed },
    { icon: Zap, label: "0-60 mph", value: car.acceleration },
    { icon: Settings, label: "Transmission", value: car.transmission },
    { icon: Fuel, label: "Fuel Type", value: car.fuelType },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 md:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={18} /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="rounded-lg overflow-hidden aspect-[16/10]">
            <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-1">{car.brand}</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">{car.name}</h1>
            <p className="text-muted-foreground text-sm mb-6">{car.year} • {car.category} • {car.horsepower} HP</p>
            <p className="text-4xl font-bold text-gradient-gold mb-6">${car.price.toLocaleString()}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{car.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} className="text-primary" />
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                  <p className="font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>

            {/* Engine */}
            <div className="bg-card border border-border rounded-lg p-5 mb-8">
              <p className="text-xs text-muted-foreground mb-1">Engine</p>
              <p className="font-display text-xl font-semibold text-foreground">{car.engine}</p>
              <p className="text-primary font-bold text-lg mt-1">{car.horsepower} Horsepower</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => { addToCart(car); toast.success(`${car.name} added to cart!`); }}
                className="btn-gold flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button
                onClick={() => { toggleFavorite(car.id); toast(fav ? "Removed from favorites" : "Added to favorites ❤️"); }}
                className={`w-14 h-14 rounded-md border flex items-center justify-center transition-colors ${fav ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}
              >
                <Heart size={20} className={fav ? "fill-current" : ""} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
