import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { cars } from "@/data/cars";
import { useStore } from "@/store/useStore";
import CarCard from "@/components/CarCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Favorites = () => {
  const favorites = useStore((s) => s.favorites);
  const favCars = cars.filter((c) => favorites.includes(c.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
          My <span className="text-gradient-gold">Favorites</span>
        </h1>
        <p className="text-muted-foreground mb-10">{favCars.length} saved vehicles</p>

        {favCars.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[40vh]">
            <Heart size={64} className="text-muted-foreground mb-6" />
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">No Favorites Yet</h2>
            <p className="text-muted-foreground mb-6">Browse our collection and save cars you love</p>
            <Link to="/products" className="btn-gold">Explore Cars</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
