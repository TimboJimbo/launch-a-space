import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">
              SignUp<span className="text-accent">Codes</span>
            </h1>
            <Badge variant="secondary" className="text-xs">
              Trusted Deals
            </Badge>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="/contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
            <a href="/privacy-policy" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="/terms-of-service" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Terms
            </a>
            <Button variant="cta" size="sm">
              Best Deals
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};