import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, TrendingUp, Users } from "lucide-react";

interface UrgencyBannerProps {
  type: "trending" | "popular" | "new-arrival";
  message: string;
  className?: string;
}

export const UrgencyBanner = ({ type, message, className = "" }: UrgencyBannerProps) => {
  const icons = {
    "trending": <TrendingUp className="w-4 h-4" />,
    "popular": <Users className="w-4 h-4" />,
    "new-arrival": <Flame className="w-4 h-4" />
  };

  const variants = {
    "trending": "secondary", 
    "popular": "default",
    "new-arrival": "secondary"
  } as const;

  return (
    <Badge 
      variant={variants[type]} 
      className={`flex items-center gap-1 text-xs font-bold animate-pulse ${className}`}
    >
      {icons[type]}
      {message}
    </Badge>
  );
};


export const LimitedStockIndicator = ({ remainingStock, totalStock }: { remainingStock: number; totalStock: number }) => {
  const percentage = (remainingStock / totalStock) * 100;
  const isLow = percentage <= 20;
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className={`font-medium ${isLow ? 'text-destructive' : 'text-muted-foreground'}`}>
          {isLow ? '🔥 Almost Gone!' : 'In Stock'}
        </span>
        <span className="text-muted-foreground">
          {remainingStock} left
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all ${
            isLow ? 'bg-destructive' : 'bg-success'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export const DealOfTheDay = () => {
  return (
    <Card className="bg-gradient-to-r from-destructive/10 to-orange/10 border-destructive/30">
      <CardContent className="p-6 text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Flame className="w-6 h-6 text-destructive" />
          <h3 className="text-xl font-bold">Featured Deal</h3>
        </div>
        
        <p className="text-muted-foreground">
          Check out our hand-picked featured deal - updated regularly with new products!
        </p>
        
        <Button variant="destructive" size="lg" className="w-full">
          View Featured Deal
        </Button>
      </CardContent>
    </Card>
  );
};

export const PopularityIndicator = ({ viewCount, purchaseCount }: { viewCount: number; purchaseCount: number }) => {
  return (
    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
      <div className="flex items-center space-x-1">
        <Users className="w-3 h-3" />
        <span>{viewCount.toLocaleString()} viewed this week</span>
      </div>
      {purchaseCount > 0 && (
        <div className="flex items-center space-x-1">
          <TrendingUp className="w-3 h-3" />
          <span>{purchaseCount} purchased recently</span>
        </div>
      )}
    </div>
  );
};

// Utility function to generate realistic urgency data
export const generateUrgencyData = (productId: string) => {
  // Use product ID to generate consistent but varied data
  const seed = productId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  return {
    isTrending: seed % 4 === 0,
    isPopular: seed % 5 === 0,
    viewCount: 150 + (seed % 500),
    purchaseCount: seed % 2 === 0 ? 5 + (seed % 20) : 0,
    stockLeft: seed % 10 === 0 ? 3 + (seed % 7) : null,
    totalStock: 50
  };
};