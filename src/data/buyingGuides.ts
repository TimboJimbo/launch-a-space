export interface BuyingGuide {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  readTime: string;
  lastUpdated: string;
  keyPoints: string[];
  topPicks: {
    budget: string;
    midRange: string;
    premium: string;
  };
  slug: string;
}

export const buyingGuides: BuyingGuide[] = [
  {
    id: "wireless-headphones-guide",
    title: "Ultimate Wireless Headphones Buying Guide 2024",
    category: "tech-gadgets",
    description: "Everything you need to know to choose the perfect wireless headphones for your needs and budget.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop",
    readTime: "8 min read",
    lastUpdated: "Updated Jan 2024",
    keyPoints: [
      "Active Noise Cancellation vs Passive Isolation",
      "Battery Life: What's realistic vs marketing claims", 
      "Sound Quality: Frequency response that matters",
      "Comfort for extended wear",
      "Bluetooth codec compatibility",
      "Price vs Performance sweet spots"
    ],
    topPicks: {
      budget: "Sony WH-CH720N - Best value under $100",
      midRange: "Sony WH-1000XM4 - Perfect balance of features",
      premium: "Sony WH-1000XM5 - Latest tech, premium materials"
    },
    slug: "wireless-headphones-guide"
  },
  {
    id: "smart-home-starter-guide", 
    title: "Smart Home Starter Guide: Build Your Connected Home",
    category: "smart-home",
    description: "Step-by-step guide to starting your smart home journey without breaking the bank or getting overwhelmed.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    readTime: "12 min read",
    lastUpdated: "Updated Jan 2024",
    keyPoints: [
      "Start with essentials: Lighting, security, temperature",
      "Hub vs hubless: Which ecosystem to choose",
      "Budget planning: Phase your smart home rollout",
      "Security considerations for IoT devices",
      "Voice assistant integration",
      "Energy savings potential"
    ],
    topPicks: {
      budget: "TP-Link Kasa Smart Plugs - Easy first step",
      midRange: "Amazon Echo + Philips Hue Starter Kit",
      premium: "Complete Lutron Caseta Pro System"
    },
    slug: "smart-home-starter-guide"
  },
  {
    id: "kitchen-appliances-guide",
    title: "Essential Kitchen Appliances: What's Worth the Investment",
    category: "home-kitchen", 
    description: "Cut through kitchen appliance marketing to find tools that actually improve your cooking and save time.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    readTime: "10 min read",
    lastUpdated: "Updated Jan 2024",
    keyPoints: [
      "Multi-use vs single-purpose appliances",
      "Counter space optimization",
      "Energy efficiency ratings that matter",
      "Build quality indicators",
      "Warranty and customer service reality",
      "Maintenance requirements"
    ],
    topPicks: {
      budget: "Instant Pot Duo - Versatile pressure cooker",
      midRange: "Ninja Foodi - Air fryer and pressure cooker combo", 
      premium: "Breville Smart Oven Pro - Premium countertop oven"
    },
    slug: "kitchen-appliances-guide"
  },
  {
    id: "fitness-equipment-home-guide",
    title: "Home Fitness Equipment: Build Your Perfect Home Gym",
    category: "sports-fitness",
    description: "Create an effective home workout space with equipment that you'll actually use long-term.", 
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    readTime: "9 min read",
    lastUpdated: "Updated Jan 2024",
    keyPoints: [
      "Space-efficient equipment selection",
      "Cardio vs strength training priorities",
      "Quality indicators for home gym equipment",
      "Budget allocation strategy",
      "Storage solutions",
      "Motivation and consistency tips"
    ],
    topPicks: {
      budget: "Resistance Bands Set - Versatile and compact",
      midRange: "Adjustable Dumbbells - Space-saving strength training",
      premium: "Peloton Bike - Premium cardio with classes"
    },
    slug: "fitness-equipment-home-guide"
  }
];

export const categoryTips = {
  "tech-gadgets": {
    title: "Tech Gadgets Buying Tips",
    tips: [
      "Check warranty terms and customer service reputation",
      "Read professional reviews, not just user ratings",
      "Consider upgrade cycles - buy near release dates for longevity",
      "Factor in ecosystem compatibility (iOS vs Android)",
      "Look for sales during major shopping events"
    ]
  },
  "smart-home": {
    title: "Smart Home Buying Tips", 
    tips: [
      "Start small and expand gradually",
      "Prioritize security and privacy features",
      "Choose one ecosystem and stick with it",
      "Consider your internet bandwidth capacity",
      "Plan for future-proofing with Matter compatibility"
    ]
  },
  "home-kitchen": {
    title: "Kitchen Appliances Buying Tips",
    tips: [
      "Measure your space before buying",
      "Read long-term user reviews (6+ months)",
      "Consider maintenance and cleaning requirements",
      "Look for energy star ratings",
      "Check for replacement part availability"
    ]
  },
  "sports-fitness": {
    title: "Fitness Equipment Buying Tips",
    tips: [
      "Try before you buy when possible",
      "Consider your actual (not aspirational) fitness level",
      "Factor in assembly and delivery logistics",
      "Read weight limits and safety specifications",
      "Look for trial periods and return policies"
    ]
  }
};