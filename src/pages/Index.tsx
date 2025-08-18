import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/layout/HeroSection";
import { CategoryGrid } from "@/components/layout/CategoryGrid";
import { ProductCard } from "@/components/layout/ProductCard";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sampleProducts, featuredProducts } from "@/data/sampleProducts";
import { TrendingUp, Clock, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Featured Deals Section */}
        <section className="py-16 bg-surface">
          <div className="container-custom space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <Badge variant="destructive" className="text-sm font-bold animate-pulse-cta">
                  🔥 EDITOR'S CHOICE - ENDING SOON!
                </Badge>
              </div>
              <h2 className="text-3xl font-bold">Today's HOTTEST Featured Deals</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                <span className="font-semibold text-foreground">DON'T MISS OUT!</span> Hand-picked deals with 
                <span className="font-semibold text-success"> the biggest savings</span> and highest commissions. 
                <span className="font-semibold text-destructive">Limited quantities available!</span>
              </p>
            </div>
            
            <div className="product-grid-featured">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  {...product}
                />
              ))}
              {sampleProducts.slice(1, 4).map((product) => (
                <ProductCard 
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg">
                View All Featured Deals
              </Button>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16">
          <div className="container-custom">
            <CategoryGrid />
          </div>
        </section>
        
        {/* Latest Deals */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-6 h-6 text-accent" />
                <Badge variant="destructive" className="text-sm font-bold animate-pulse-cta">
                  ⚡ JUST ADDED - GRAB THEM FAST!
                </Badge>
              </div>
              <h2 className="text-3xl font-bold">Latest FLASH Deals & Steals</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                <span className="font-bold text-destructive">URGENT:</span> Fresh deals added every hour! 
                <span className="font-semibold text-foreground">Over 200 deals claimed in the last hour.</span>
                Don't let these limited-time savings slip away!
              </p>
            </div>
            
            <div className="product-grid">
              {sampleProducts.slice(0, 6).map((product) => (
                <ProductCard 
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
            
            <div className="text-center">
            <Button variant="cta" size="lg" className="text-lg px-8 font-bold animate-pulse-cta">
              🛒 GRAB THIS DEAL NOW - LIMITED TIME!</Button>
            </div>
          </div>
        </section>
        
        {/* Trust & Value Proposition */}
        <section className="py-20 bg-gradient-to-br from-primary/8 to-success/5">
          <div className="container-custom">
            <div className="text-center space-y-10 max-w-5xl mx-auto">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-6 py-2 text-base">
                  🏆 Trusted by 500,000+ Smart Shoppers
                </Badge>
                <h2 className="text-4xl font-bold">Why SignUpCodes Saves You MORE Money</h2>
                <p className="text-xl text-muted-foreground">
                  <span className="font-bold text-success">$2.4M+ saved by our community this month!</span> 
                  Join the smart shoppers who never pay full price.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/50 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">#1 Deal Curation Team</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">10+ deal experts</span> work 24/7 to find you 
                    the highest-value deals. We test every product before recommending it.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    ✓ Over 1000 deals tested monthly
                  </Badge>
                </div>
                
                <div className="bg-white/50 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-accent rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">100% Transparent Process</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Clear affiliate disclosure</span> on every deal. 
                    We earn small commissions at no cost to you, and pass maximum savings to you.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    ✓ Honest reviews since 2019
                  </Badge>
                </div>
                
                <div className="bg-white/50 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-trust rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Real-Time Deal Monitoring</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Updated every 15 minutes!</span> Our price monitoring 
                    system ensures you get the lowest prices and never miss flash sales.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    ✓ Price drops tracked instantly
                  </Badge>
                </div>
              </div>
              
              {/* Social Proof Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">$2.4M+</div>
                  <div className="text-sm text-muted-foreground">Saved This Month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">4.9★</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-destructive">24/7</div>
                  <div className="text-sm text-muted-foreground">Deal Updates</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
