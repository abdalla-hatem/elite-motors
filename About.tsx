import { Users, Target, Award, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            About <span className="text-gradient-gold">Elite Motors</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Founded in 2010, Elite Motors has grown from a small showroom to the region's most trusted luxury car dealership, serving discerning clients who demand nothing but excellence.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Our <span className="text-gradient-gold">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Excellence", desc: "Every car meets our highest standards of quality and performance" },
              { icon: Users, title: "Customer First", desc: "Personalized service tailored to your unique preferences" },
              { icon: Target, title: "Integrity", desc: "Transparent pricing and honest dealings, always" },
              { icon: Globe, title: "Global Reach", desc: "Sourcing the finest vehicles from manufacturers worldwide" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">Our <span className="text-gradient-gold">Story</span></h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Elite Motors was born from a passion for automotive excellence. What started as a dream to bring the world's finest vehicles to one place has evolved into a premier destination for car enthusiasts and collectors alike.</p>
            <p>Over 15 years, we have built relationships with top manufacturers globally, ensuring our clients have access to the most exclusive and sought-after vehicles on the market. Our team of automotive experts provides unmatched guidance through every step of the buying process.</p>
            <p>Today, Elite Motors stands as a symbol of trust, quality, and luxury in the automotive industry. With over 500 cars sold and a 98% customer satisfaction rate, we continue to set the standard for premium car dealerships.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default About;
