import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-display font-bold text-gradient-gold mb-4">ELITE MOTORS</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium automotive excellence. Your destination for the world's finest vehicles.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["/", "/products", "/about", "/contact"].map((path) => (
              <Link key={path} to={path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Categories</h4>
          <div className="space-y-2">
            {["Sports", "Luxury", "Electric", "SUV"].map((cat) => (
              <Link key={cat} to={`/products?category=${cat}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {cat} Cars
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>📍 123 Luxury Ave, Dubai</p>
            <p>📞 +971 50 123 4567</p>
            <p>✉️ info@elitemotors.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
        © 2025 Elite Motors. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
