import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { trackAffiliateClick } from "@/lib/affiliate";
import type { ProductComparison } from "@/data/comparisons";

interface ProductComparisonProps {
  comparison: ProductComparison;
  className?: string;
}

export const ProductComparisonTable = ({ comparison, className = "" }: ProductComparisonProps) => {
  const handleProductClick = (product: any) => {
    trackAffiliateClick(product.id, product.name, comparison.category);
    window.open(product.affiliate_url, '_blank');
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">{comparison.title}</h2>
        <p className="text-muted-foreground">
          Side-by-side comparison of the top products in this category
        </p>
      </div>

      {/* Mobile Cards View (visible on small screens) */}
      <div className="grid gap-6 md:hidden">
        {comparison.products.map((product, index) => (
          <Card key={product.id} className="relative">
            {index === 0 && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white px-4 py-1">
                  🏆 Best Choice
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center space-y-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg mx-auto"
              />
              <div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Price */}
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{product.price}</div>
                {product.originalPrice && (
                  <div className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </div>
                )}
              </div>

              {/* Best For */}
              <div className="text-center">
                <Badge variant="secondary" className="text-xs">
                  {product.bestFor}
                </Badge>
              </div>

              {/* Key Specs */}
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Specs:</h4>
                {Object.entries(product.keySpecs).slice(0, 3).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {/* Pros */}
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-success">Pros:</h4>
                <ul className="space-y-1">
                  {product.pros.slice(0, 2).map((pro, idx) => (
                    <li key={idx} className="text-sm flex items-start space-x-2">
                      <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-destructive">Cons:</h4>
                <ul className="space-y-1">
                  {product.cons.slice(0, 2).map((con, idx) => (
                    <li key={idx} className="text-sm flex items-start space-x-2">
                      <XCircle className="w-3 h-3 text-destructive mt-0.5 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className="w-full" 
                onClick={() => handleProductClick(product)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Deal
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop Table View (hidden on mobile) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4 font-semibold">Product</th>
              <th className="text-center p-4 font-semibold">Rating</th>
              <th className="text-center p-4 font-semibold">Price</th>
              <th className="text-center p-4 font-semibold">Best For</th>
              <th className="text-center p-4 font-semibold">Key Features</th>
              <th className="text-center p-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {comparison.products.map((product, index) => (
              <tr key={product.id} className="border-b hover:bg-muted/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <div className="font-semibold">{product.name}</div>
                      {index === 0 && (
                        <Badge className="bg-primary text-white text-xs mt-1">
                          🏆 Best Choice
                        </Badge>
                      )}
                    </div>
                  </div>
                </td>
                
                <td className="text-center p-4">
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                </td>
                
                <td className="text-center p-4">
                  <div className="font-bold text-primary">{product.price}</div>
                  {product.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </div>
                  )}
                </td>
                
                <td className="text-center p-4">
                  <Badge variant="secondary" className="text-xs">
                    {product.bestFor}
                  </Badge>
                </td>
                
                <td className="p-4">
                  <ul className="space-y-1 text-sm">
                    {Object.entries(product.keySpecs).slice(0, 3).map(([key, value]) => (
                      <li key={key} className="flex justify-between">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                
                <td className="text-center p-4">
                  <Button 
                    size="sm" 
                    onClick={() => handleProductClick(product)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Deal
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};