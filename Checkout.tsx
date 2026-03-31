import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useStore } from "@/store/useStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", zip: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.address) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    clearCart();
    toast.success("Order placed successfully! 🎉");
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <CheckCircle size={80} className="text-primary mb-6" />
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground max-w-md mb-8">Thank you for your purchase. We will contact you shortly with delivery details.</p>
          <Link to="/" className="btn-gold">Return Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  const update = (key: string, value: string) => setForm({ ...form, [key]: value });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 max-w-5xl mx-auto px-4 md:px-8">
        <Link to="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={18} /> Back to Cart
        </Link>
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">
          <span className="text-gradient-gold">Checkout</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">Customer Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input placeholder="Full Name *" value={form.name} onChange={(e) => update("name", e.target.value)} className="input-field" required />
                <input placeholder="Email *" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input-field" required />
                <input placeholder="Phone *" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input-field" required />
                <input placeholder="City" value={form.city} onChange={(e) => update("city", e.target.value)} className="input-field" />
              </div>
              <input placeholder="Full Address *" value={form.address} onChange={(e) => update("address", e.target.value)} className="input-field w-full mt-4" required />
              <input placeholder="Zip Code" value={form.zip} onChange={(e) => update("zip", e.target.value)} className="input-field w-full mt-4" />
            </div>
            <button type="submit" className="btn-gold w-full text-lg py-4">Place Order</button>
          </form>

          {/* Order Summary */}
          <div className="bg-card border border-border rounded-lg p-6 h-fit">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {cart.map(({ car, quantity }) => (
                <div key={car.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{car.name} x{quantity}</span>
                  <span className="text-foreground font-medium">${(car.price * quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3">
              <div className="flex justify-between">
                <span className="font-display font-bold text-foreground">Total</span>
                <span className="text-xl font-bold text-gradient-gold">${cartTotal().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
