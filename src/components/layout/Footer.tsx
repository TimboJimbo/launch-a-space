import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted border-t border-border mt-12">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-bold text-primary">
                SignUp<span className="text-accent">Codes</span>
              </h3>
              <Badge variant="secondary" className="text-xs">
                Trusted
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for the best deals, sign-up bonuses, and product recommendations. 
              We help you save money with honest, expert guidance.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <div className="space-y-2 text-sm">
              <a href="/categories/tech-gadgets" className="block text-muted-foreground hover:text-accent transition-colors">
                Tech & Gadgets
              </a>
              <a href="/categories/home-kitchen" className="block text-muted-foreground hover:text-accent transition-colors">
                Home & Kitchen
              </a>
              <a href="/categories/health-fitness" className="block text-muted-foreground hover:text-accent transition-colors">
                Health & Fitness
              </a>
              <a href="/categories/fashion-beauty" className="block text-muted-foreground hover:text-accent transition-colors">
                Fashion & Beauty
              </a>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-sm">
              <a href="/best-sellers" className="block text-muted-foreground hover:text-accent transition-colors">
                Best Sellers
              </a>
              <a href="/deals" className="block text-muted-foreground hover:text-accent transition-colors">
                Latest Deals
              </a>
              <a href="/how-it-works" className="block text-muted-foreground hover:text-accent transition-colors">
                How It Works
              </a>
              <a href="/reviews" className="block text-muted-foreground hover:text-accent transition-colors">
                Product Reviews
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <a href="/disclosure" className="block text-muted-foreground hover:text-accent transition-colors">
                Affiliate Disclosure
              </a>
              <a href="/privacy" className="block text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-accent transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} SignUpCodes. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <strong>Affiliate Disclosure:</strong> We earn from qualifying purchases as Amazon Associates and other affiliate programs.
          </p>
        </div>
      </div>
    </footer>
  );
};