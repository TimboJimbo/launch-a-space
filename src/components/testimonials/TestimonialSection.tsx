import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, CheckCircle } from "lucide-react";
import { testimonials, trustStats } from "@/data/testimonials";

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-success/5 to-primary/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-6 py-2 text-base">
            ⭐ Real Customer Reviews
          </Badge>
          <h2 className="text-4xl font-bold">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - see why thousands of shoppers trust SignUpCodes for their deals
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/50 rounded-xl border">
            <div className="text-3xl font-bold text-primary mb-2">{trustStats.totalUsers}</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white/50 rounded-xl border">
            <div className="text-3xl font-bold text-success mb-2">{trustStats.totalSavings}</div>
            <div className="text-sm text-muted-foreground">Total Saved</div>
          </div>
          <div className="text-center p-6 bg-white/50 rounded-xl border">
            <div className="text-3xl font-bold text-accent mb-2 flex items-center justify-center gap-1">
              {trustStats.averageRating} <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white/50 rounded-xl border">
            <div className="text-3xl font-bold text-trust mb-2">{trustStats.repeatCustomers}</div>
            <div className="text-sm text-muted-foreground">Return Rate</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow bg-white/70">
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <Badge variant="secondary" className="text-xs text-success flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Review Text */}
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Product & Savings */}
                {testimonial.product && (
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Product: {testimonial.product}</div>
                    {testimonial.savings && (
                      <Badge variant="secondary" className="text-success">
                        Saved: {testimonial.savings}
                      </Badge>
                    )}
                  </div>
                )}

                {/* Customer Info */}
                <div className="flex items-center space-x-3 pt-4 border-t">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Guarantee */}
        <div className="text-center bg-white/60 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Our Promise to You</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every deal is hand-verified, every link is tested, and every product recommendation 
            comes from genuine research. We only earn when you save - so your success is our success.
          </p>
        </div>
      </div>
    </section>
  );
};