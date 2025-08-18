import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Category {
  name: string;
  description: string;
  icon: string;
  count: number;
  slug: string;
}

const categories: Category[] = [
  {
    name: "Tech & Gadgets",
    description: "Save up to 60% on top tech brands - AirPods, smartphones & more",
    icon: "📱",
    count: 156,
    slug: "tech-gadgets"
  },
  {
    name: "Home & Kitchen",
    description: "Transform your home for less - Premium appliances up to 50% OFF",
    icon: "🏠",
    count: 203,
    slug: "home-kitchen"
  },
  {
    name: "Health & Fitness",
    description: "Reach your goals faster - Fitness gear & supplements 40% OFF",
    icon: "💪",
    count: 89,
    slug: "health-fitness"
  },
  {
    name: "Fashion & Beauty",
    description: "Look amazing for less - Designer brands up to 70% OFF",
    icon: "✨",
    count: 127,
    slug: "fashion-beauty"
  },
  {
    name: "Books & Education",
    description: "Learn & grow smarter - Courses & books up to 80% OFF",
    icon: "📚",
    count: 67,
    slug: "books-education"
  },
  {
    name: "Travel & Lifestyle",
    description: "Adventure awaits - Travel essentials & lifestyle up to 45% OFF",
    icon: "✈️",
    count: 94,
    slug: "travel-lifestyle"
  }
];

export const CategoryGrid = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Shop by Category</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the best deals and sign-up bonuses across all categories. 
          Our experts curate only the most trusted offers.
        </p>
      </div>
      
      <div className="product-grid">
        {categories.map((category) => (
          <a 
            key={category.slug} 
            href={`/categories/${category.slug}`}
            className="block"
          >
            <Card className="card-hover h-full">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-3">{category.icon}</div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                <Badge variant="secondary" className="mt-4">
                  {category.count} deals available
                </Badge>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};