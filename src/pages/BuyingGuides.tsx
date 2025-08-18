import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BuyingGuideCard } from "@/components/guides/BuyingGuideCard";
import { ProductComparisonTable } from "@/components/guides/ProductComparison";
import { buyingGuides, categoryTips } from "@/data/buyingGuides";
import { productComparisons } from "@/data/comparisons";
import { BookOpen, Lightbulb, TrendingUp } from "lucide-react";

export default function BuyingGuides() {
  const featuredGuides = buyingGuides.slice(0, 6);
  const featuredComparison = productComparisons[0]; // Show the first comparison

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <Badge variant="secondary" className="px-6 py-2 text-base">
            📚 Expert Buying Guides
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold">
            Smart Shopping Made <span className="text-primary">Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop getting overwhelmed by endless product options. Our expert guides and 
            detailed comparisons help you make confident purchasing decisions.
          </p>
        </div>

        {/* Featured Comparison */}
        {featuredComparison && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
                <Badge variant="secondary" className="">
                  🔥 Most Popular
                </Badge>
              </div>
              <h2 className="text-3xl font-bold mb-4">Featured Product Comparison</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See our most requested comparison with detailed specs, pros/cons, and expert recommendations
              </p>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/5 to-success/5 border-primary/20">
              <CardContent className="p-8">
                <ProductComparisonTable comparison={featuredComparison} />
              </CardContent>
            </Card>
          </section>
        )}

        {/* Buying Guides Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <Badge variant="secondary">
                📖 Comprehensive Guides
              </Badge>
            </div>
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In-depth buying guides that cut through marketing hype and help you find products that actually meet your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <BuyingGuideCard 
                key={guide.id}
                guide={guide}
                onReadMore={(guide) => {
                  // In a real app, this would navigate to the guide detail page
                  console.log('Opening guide:', guide.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </section>

        {/* Category Tips */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
              <Badge variant="secondary">
                💡 Pro Tips
              </Badge>
            </div>
            <h2 className="text-3xl font-bold mb-4">Category-Specific Tips</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick tips and considerations for each product category to help you shop smarter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(categoryTips).map(([categoryKey, tipData]) => (
              <Card key={categoryKey} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="capitalize">{tipData.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tipData.tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary/10 to-success/10 rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have a specific product category you'd like us to research? Let us know and we'll create a comprehensive buying guide for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Request a Guide
            </Button>
            <Button variant="outline" size="lg">
              Browse All Products
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}