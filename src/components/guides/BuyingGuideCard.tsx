import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, CheckCircle } from "lucide-react";
import type { BuyingGuide } from "@/data/buyingGuides";

interface BuyingGuideCardProps {
  guide: BuyingGuide;
  onReadMore?: (guide: BuyingGuide) => void;
}

export const BuyingGuideCard = ({ guide, onReadMore }: BuyingGuideCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow group">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <img 
          src={guide.image} 
          alt={guide.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {guide.category.replace('-', ' ')}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="space-y-3">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{guide.readTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4" />
            <span>{guide.lastUpdated}</span>
          </div>
        </div>
        
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          {guide.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {guide.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Points Preview */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">What You'll Learn:</h4>
          <ul className="space-y-1">
            {guide.keyPoints.slice(0, 3).map((point, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
            {guide.keyPoints.length > 3 && (
              <li className="text-sm text-muted-foreground">
                + {guide.keyPoints.length - 3} more topics
              </li>
            )}
          </ul>
        </div>

        {/* Top Picks Preview */}
        <div className="space-y-2 border-t pt-4">
          <h4 className="font-semibold text-sm">Our Top Picks:</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-success">Budget</Badge>
              <span className="text-muted-foreground line-clamp-1">{guide.topPicks.budget}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-primary">Best</Badge>
              <span className="text-muted-foreground line-clamp-1">{guide.topPicks.midRange}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-accent">Premium</Badge>
              <span className="text-muted-foreground line-clamp-1">{guide.topPicks.premium}</span>
            </div>
          </div>
        </div>

        <Button 
          className="w-full" 
          onClick={() => onReadMore?.(guide)}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Read Full Guide
        </Button>
      </CardContent>
    </Card>
  );
};