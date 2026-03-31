import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const update = (key: string, value: string) => setForm({ ...form, [key]: value });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Have a question? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Address", value: "123 Luxury Avenue, Dubai, UAE" },
              { icon: Phone, title: "Phone", value: "+971 50 123 4567" },
              { icon: Mail, title: "Email", value: "info@elitemotors.com" },
              { icon: Clock, title: "Working Hours", value: "Mon - Sat: 9AM - 9PM" },
            ].map(({ icon: Icon, title, value }) => (
              <div key={title} className="bg-card border border-border rounded-lg p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{title}</p>
                  <p className="text-muted-foreground text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-card border border-border rounded-lg p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Send us a Message</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input placeholder="Your Name *" value={form.name} onChange={(e) => update("name", e.target.value)} className="input-field" required />
              <input placeholder="Your Email *" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input-field" required />
            </div>
            <input placeholder="Subject" value={form.subject} onChange={(e) => update("subject", e.target.value)} className="input-field w-full mb-4" />
            <textarea placeholder="Your Message *" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className="input-field w-full mb-6 resize-none" required />
            <button type="submit" className="btn-gold w-full text-lg">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
