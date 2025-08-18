import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Flame, TrendingUp, Users } from "lucide-react";
import { useState, useEffect } from "react";

interface UrgencyBannerProps {
  type: "limited-time" | "trending" | "popular" | "new-arrival";
  message: string;
  className?: string;
}

export const UrgencyBanner = ({ type, message, className = "" }: UrgencyBannerProps) => {
  const icons = {
    "limited-time": <Clock className="w-4 h-4" />,
    "trending": <TrendingUp className="w-4 h-4" />,
    "popular": <Users className="w-4 h-4" />,
    "new-arrival": <Flame className="w-4 h-4" />
  };

  const variants = {
    "limited-time": "destructive",
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

export const CountdownTimer = ({ endTime, onExpire }: { endTime: Date; onExpire?: () => void }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        onExpire?.();
        clearInterval(timer);
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, onExpire]);

  if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 text-sm">
      <Clock className="w-4 h-4 text-destructive" />
      <span className="font-bold text-destructive">
        Ends in: {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </div>
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
  // Calculate end of day
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  return (
    <Card className="bg-gradient-to-r from-destructive/10 to-orange/10 border-destructive/30">
      <CardContent className="p-6 text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Flame className="w-6 h-6 text-destructive" />
          <h3 className="text-xl font-bold">Deal of the Day</h3>
        </div>
        
        <p className="text-muted-foreground">
          Don't miss today's featured deal - refreshed daily at midnight!
        </p>
        
        <CountdownTimer endTime={tomorrow} />
        
        <Button variant="destructive" size="lg" className="w-full">
          View Today's Deal
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
    isLimitedTime: seed % 3 === 0,
    isTrending: seed % 4 === 0,
    isPopular: seed % 5 === 0,
    viewCount: 150 + (seed % 500),
    purchaseCount: seed % 2 === 0 ? 5 + (seed % 20) : 0,
    stockLeft: seed % 10 === 0 ? 3 + (seed % 7) : null,
    totalStock: 50
  };
};