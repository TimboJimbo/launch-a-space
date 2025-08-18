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
                <Badge variant="secondary" className="text-sm">
                  Editor's Choice
                </Badge>
              </div>
              <h2 className="text-3xl font-bold">Today's Featured Deals</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hand-picked deals with the highest savings and best value. 
                Limited time offers updated daily.
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
                <Badge variant="secondary" className="text-sm">
                  Just Added
                </Badge>
              </div>
              <h2 className="text-3xl font-bold">Latest Deals & Offers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fresh deals added every hour. Don't miss out on these limited-time savings.
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
              <Button variant="cta" size="lg" className="text-lg px-8">
                Browse All Deals
              </Button>
            </div>
          </div>
        </section>
        
        {/* Trust & Value Proposition */}
        <section className="py-16 bg-primary/5">
          <div className="container-custom">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold">Why Choose SignUpCodes?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Expert Curation</h3>
                  <p className="text-muted-foreground">
                    Our team researches and tests products daily to bring you only the best deals with real value.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Transparent Reviews</h3>
                  <p className="text-muted-foreground">
                    Honest, unbiased reviews with clear affiliate disclosure. We only recommend what we'd buy ourselves.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold">Always Fresh</h3>
                  <p className="text-muted-foreground">
                    Deals updated hourly with price monitoring to ensure you never miss a savings opportunity.
                  </p>
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
