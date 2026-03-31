import { useState } from "react";
import { Search } from "lucide-react";
import { cars, categories, brands } from "@/data/cars";
import CarCard from "@/components/CarCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState("default");

  let filtered = cars.filter((car) => {
    const matchSearch = car.name.toLowerCase().includes(search.toLowerCase()) || car.brand.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || car.category === category;
    const matchBrand = brand === "All" || car.brand === brand;
    return matchSearch && matchCategory && matchBrand;
  });

  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sort === "hp-desc") filtered.sort((a, b) => b.horsepower - a.horsepower);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
            Our <span className="text-gradient-gold">Collection</span>
          </h1>
          <p className="text-muted-foreground">{filtered.length} vehicles available</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search cars..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field w-full pl-10"
            />
          </div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field">
            {categories.map((c) => <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>)}
          </select>
          <select value={brand} onChange={(e) => setBrand(e.target.value)} className="input-field">
            {brands.map((b) => <option key={b} value={b}>{b === "All" ? "All Brands" : b}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="input-field">
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="hp-desc">Horsepower</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl font-display text-muted-foreground">No cars found</p>
            <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
