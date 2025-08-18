export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  product?: string;
  savings?: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b105?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "SignUpCodes saved me hours of browsing Amazon! Found the perfect wireless headphones at 40% off. The product details were spot-on and shipping was exactly as described.",
    product: "Sony WH-1000XM5 Headphones",
    savings: "$72",
    verified: true
  },
  {
    id: "2", 
    name: "Mike Rodriguez",
    location: "Austin, TX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "As a busy dad, I don't have time to hunt for deals. SignUpCodes does the work for me - every product I've bought has been exactly as described with genuine savings.",
    product: "Kitchen Appliance Bundle",
    savings: "$125",
    verified: true
  },
  {
    id: "3",
    name: "Jennifer Walsh",
    location: "Denver, CO", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "The buying guides are incredibly helpful! I was overwhelmed choosing between different air purifiers, but their comparison guide made the decision easy.",
    product: "HEPA Air Purifier",
    savings: "$89",
    verified: true
  },
  {
    id: "4",
    name: "David Kim",
    location: "Seattle, WA",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", 
    rating: 5,
    text: "I've been using SignUpCodes for 6 months. Every deal is legitimate, products arrive as described, and I've saved over $400 total. Highly recommended!",
    savings: "$400+",
    verified: true
  },
  {
    id: "5",
    name: "Lisa Thompson",
    location: "Miami, FL",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "Finally, a deal site that's honest! No fake 'limited time' pressure - just real products at good prices. The detailed reviews help me make confident purchases.",
    product: "Smart Home Starter Kit", 
    savings: "$156",
    verified: true
  },
  {
    id: "6",
    name: "Robert Johnson",
    location: "Phoenix, AZ",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "The product comparison tools are game-changers. Instead of reading hundreds of reviews, I get clear comparisons of the top options in each category.",
    product: "Fitness Tracker",
    savings: "$45",
    verified: true
  }
];

export const trustStats = {
  totalUsers: "25,000+",
  totalSavings: "$2.1M+", 
  averageRating: 4.9,
  verifiedPurchases: "15,000+",
  repeatCustomers: "78%"
};