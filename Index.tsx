import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Zap } from "lucide-react";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const featuredCars = cars.filter((c) => c.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
            alt="Luxury car"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Premium Automotive Excellence
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight mb-6">
              Drive Your <span className="text-gradient-gold">Dreams</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover the world's finest vehicles. From legendary sports cars to cutting-edge electric machines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-gold flex items-center gap-2">
                Explore Collection <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-outline-gold">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Cars Sold" },
            { value: "50+", label: "Premium Brands" },
            { value: "15+", label: "Years Experience" },
            { value: "98%", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why <span className="text-gradient-gold">Elite Motors</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Experience automotive luxury at its finest</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Certified Quality", desc: "Every vehicle undergoes rigorous 150-point inspection" },
              { icon: Award, title: "Award Winning", desc: "Recognized as the top luxury dealer for 5 consecutive years" },
              { icon: Zap, title: "Instant Financing", desc: "Flexible payment plans with competitive rates" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Featured <span className="text-gradient-gold">Collection</span>
              </h2>
              <p className="text-muted-foreground mt-2">Hand-picked premium vehicles</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-primary hover:opacity-80 transition-opacity font-medium">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="btn-outline-gold inline-flex items-center gap-2">
              View All Cars <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Find Your <span className="text-gradient-gold">Perfect Car</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Browse our complete collection and discover vehicles that match your style and performance needs.
          </p>
          <Link to="/products" className="btn-gold inline-flex items-center gap-2 text-lg px-8 py-4">
            Start Shopping <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
