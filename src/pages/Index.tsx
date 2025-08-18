import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/layout/HeroSection";
import { CategoryGrid } from "@/components/layout/CategoryGrid";
import { ProductCard } from "@/components/layout/ProductCard";
import { Footer } from "@/components/layout/Footer";
import { FtcDisclosure } from "@/components/layout/FtcDisclosure";
import { NewsletterSignup } from "@/components/layout/NewsletterSignup";
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
                <span className="font-semibold text-foreground">Hand-picked deals</span> with 
                <span className="font-semibold text-success">verified savings</span> from trusted retailers. 
                <span className="font-semibold text-destructive">Updated daily with fresh offers!</span>
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
                <span className="font-bold text-destructive">NEW:</span> Fresh deals added regularly! 
                <span className="font-semibold text-foreground">Discover savings from top brands.</span>
                Don't miss these great offers from trusted retailers!
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
                  🏆 Trusted Deal Platform Since 2019
                </Badge>
                <h2 className="text-4xl font-bold">Why Choose SignUpCodes for Your Deals</h2>
                <p className="text-xl text-muted-foreground">
                  <span className="font-bold text-success">Helping shoppers find verified deals</span> from trusted retailers. 
                  Join our community of smart shoppers.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/50 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Expert Deal Curation</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Our team</span> carefully selects 
                    quality deals from reputable retailers and brands.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    ✓ Quality deals from trusted sources
                  </Badge>
                </div>
                
                <div className="bg-white/50 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-accent rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">100% Transparent Process</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Full transparency</span> on every deal. 
                    We may earn commissions at no extra cost to you when you make purchases.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    ✓ Transparent affiliate relationships
                  </Badge>
                </div>
                
                <div className="bg-white/50 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-trust rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Regular Deal Updates</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Regularly updated</span> with new deals 
                    from various retailers and brands across different categories.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    ✓ Fresh deals added regularly
                  </Badge>
                </div>
              </div>
              
              {/* Social Proof Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2019</div>
                  <div className="text-sm text-muted-foreground">Since Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">100+</div>
                  <div className="text-sm text-muted-foreground">Partner Retailers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">Daily</div>
                  <div className="text-sm text-muted-foreground">New Deals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-destructive">Free</div>
                  <div className="text-sm text-muted-foreground">To Use</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <NewsletterSignup />
      <FtcDisclosure />
      <Footer />
    </div>
  );
};

export default Index;
