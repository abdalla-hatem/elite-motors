import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { useStore } from "@/store/useStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 flex flex-col items-center justify-center min-h-[60vh]">
          <ShoppingBag size={64} className="text-muted-foreground mb-6" />
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Browse our collection and add your dream car</p>
          <Link to="/products" className="btn-gold">Explore Cars</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 max-w-5xl mx-auto px-4 md:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={18} /> Continue Shopping
        </Link>
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">
          Shopping <span className="text-gradient-gold">Cart</span>
        </h1>

        <div className="space-y-4 mb-8">
          {cart.map(({ car, quantity }) => (
            <div key={car.id} className="bg-card border border-border rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
              <img src={car.image} alt={car.name} className="w-24 h-16 object-cover rounded" />
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs text-muted-foreground">{car.brand}</p>
                <h3 className="font-display font-semibold text-foreground">{car.name}</h3>
                <p className="text-primary font-bold">${car.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => updateQuantity(car.id, quantity - 1)} className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center font-semibold text-foreground">{quantity}</span>
                <button onClick={() => updateQuantity(car.id, quantity + 1)} className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Plus size={14} />
                </button>
              </div>
              <p className="font-bold text-foreground w-32 text-right">${(car.price * quantity).toLocaleString()}</p>
              <button onClick={() => removeFromCart(car.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="text-foreground font-semibold">${cartTotal().toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-muted-foreground">Shipping</span>
            <span className="text-primary font-semibold">Free</span>
          </div>
          <div className="border-t border-border pt-4 flex justify-between items-center mb-6">
            <span className="text-xl font-display font-bold text-foreground">Total</span>
            <span className="text-2xl font-bold text-gradient-gold">${cartTotal().toLocaleString()}</span>
          </div>
          <Link to="/checkout" className="btn-gold w-full block text-center text-lg">
            Proceed to Checkout
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
