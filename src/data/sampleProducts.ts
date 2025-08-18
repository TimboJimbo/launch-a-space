export interface Product {
  id: string;
  title: string;
  image: string;
  price?: string;
  originalPrice?: string;
  rating?: number;
  reviews?: number;
  deal?: string;
  affiliate_url: string;
  category: string;
  isFeatured?: boolean;
}

export const sampleProducts: Product[] = [
  // TECH GADGETS - Featured Products
  {
    id: "1",
    title: "Apple AirPods Pro (2nd Generation) with Wireless Charging Case",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop&crop=center",
    price: "$179.99",
    originalPrice: "$249.99",
    rating: 4.8,
    reviews: 157842,
    deal: "SAVE BIG: $70 OFF",
    affiliate_url: "https://www.amazon.com/dp/B0BDHWDR12?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "2",
    title: "Samsung Galaxy Watch 6 Classic 47mm Bluetooth Smartwatch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    price: "$279.99",
    originalPrice: "$429.99",
    rating: 4.6,
    reviews: 23891,
    deal: "HUGE SAVE: 35% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0C9KYV91Q?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "3",
    title: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
    price: "$328.00",
    originalPrice: "$399.99",
    rating: 4.7,
    reviews: 45672,
    deal: "BEST PRICE: $72 OFF",
    affiliate_url: "https://www.amazon.com/dp/B09XJ5B38Q?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "4",
    title: "Amazon Echo Dot (5th Gen) Smart Speaker with Alexa",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop&crop=center",
    price: "$27.99",
    originalPrice: "$49.99",
    rating: 4.7,
    reviews: 789234,
    deal: "POPULAR: 44% OFF",
    affiliate_url: "https://www.amazon.com/dp/B09B8V1LZ3?tag=signupcodes-20",
    category: "tech-gadgets"
  },
  {
    id: "5",
    title: "Apple iPhone 15 USB-C to USB-C Cable (1 meter)",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop&crop=center",
    price: "$19.00",
    originalPrice: "$29.00",
    rating: 4.5,
    reviews: 67823,
    deal: "SAVE: 34% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0BDHB9Y8W?tag=signupcodes-20",
    category: "tech-gadgets"
  },
  {
    id: "6",
    title: "Anker PowerCore 10000 Portable Charger Power Bank",
    image: "https://images.unsplash.com/photo-1609592806615-7e6baa264bd9?w=400&h=400&fit=crop&crop=center",
    price: "$21.99",
    originalPrice: "$35.99",
    rating: 4.6,
    reviews: 234567,
    deal: "DEAL: Save $14",
    affiliate_url: "https://www.amazon.com/dp/B019GJLER8?tag=signupcodes-20",
    category: "tech-gadgets"
  },

  // HOME & KITCHEN - High Converting Products
  {
    id: "7",
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker 6 Quart",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    price: "$69.95",
    originalPrice: "$99.95",
    rating: 4.7,
    reviews: 567890,
    deal: "KITCHEN SAVE: 30% OFF",
    affiliate_url: "https://www.amazon.com/dp/B07GBZ4Q68?tag=signupcodes-20",
    category: "home-kitchen",
    isFeatured: true
  },
  {
    id: "8",
    title: "Ninja Foodi Personal Blender for Shakes Smoothies",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center",
    price: "$39.99",
    originalPrice: "$79.99",
    rating: 4.4,
    reviews: 45612,
    deal: "BLEND DEAL: 50% OFF",
    affiliate_url: "https://www.amazon.com/dp/B091J4NJHF?tag=signupcodes-20",
    category: "home-kitchen"
  },
  {
    id: "9",
    title: "Keurig K-Mini Single Serve Coffee Maker",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop&crop=center",
    price: "$59.99",
    originalPrice: "$89.99",
    rating: 4.3,
    reviews: 123456,
    deal: "COFFEE: 33% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0BQBQZDFX?tag=signupcodes-20",
    category: "home-kitchen"
  },
  {
    id: "10",
    title: "Lodge Cast Iron Skillet Pre-Seasoned 10.25 Inch",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    price: "$24.90",
    originalPrice: "$34.90",
    rating: 4.6,
    reviews: 287654,
    deal: "CLASSIC: Save $10",
    affiliate_url: "https://www.amazon.com/dp/B00006JSUB?tag=signupcodes-20",
    category: "home-kitchen"
  },
  {
    id: "11",
    title: "Shark Navigator Lift-Away Professional Upright Vacuum",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    price: "$119.99",
    originalPrice: "$179.99",
    rating: 4.4,
    reviews: 98765,
    deal: "CLEAN UP: 33% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0772DSFN9?tag=signupcodes-20",
    category: "home-kitchen"
  },

  // HEALTH & FITNESS - Wellness Focused
  {
    id: "12",
    title: "Fitbit Charge 5 Advanced Fitness & Health Tracker",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop&crop=center",
    price: "$129.95",
    originalPrice: "$199.95",
    rating: 4.2,
    reviews: 87654,
    deal: "FITNESS: Save $70",
    affiliate_url: "https://www.amazon.com/dp/B0B2TZMQB9?tag=signupcodes-20",
    category: "health-fitness",
    isFeatured: true
  },
  {
    id: "13",
    title: "Optimum Nutrition Gold Standard 100% Whey Protein Powder",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop&crop=center",
    price: "$54.99",
    originalPrice: "$74.99",
    rating: 4.5,
    reviews: 567123,
    deal: "PROTEIN: Save $20",
    affiliate_url: "https://www.amazon.com/dp/B000QSNYGI?tag=signupcodes-20",
    category: "health-fitness"
  },
  {
    id: "14",
    title: "Resistance Bands Set with Handles Door Anchor Ankle Straps",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$39.99",
    rating: 4.3,
    reviews: 76543,
    deal: "HOME GYM: 50% OFF",
    affiliate_url: "https://www.amazon.com/dp/B077ZGBQ8G?tag=signupcodes-20",
    category: "health-fitness"
  },
  {
    id: "15",
    title: "High Density Muscle Foam Roller for Deep Tissue Recovery",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    price: "$24.99",
    originalPrice: "$39.99",
    rating: 4.4,
    reviews: 45321,
    deal: "RECOVERY: 38% OFF",
    affiliate_url: "https://www.amazon.com/dp/B00XM2MRGI?tag=signupcodes-20",
    category: "health-fitness"
  },

  // New categories with more products
  {
    id: "16",
    title: "Bestseller Books Bundle - Top 5 Self-Help Books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&crop=center",
    price: "$49.99",
    originalPrice: "$89.95",
    rating: 4.8,
    reviews: 23456,
    deal: "BOOK BUNDLE: 44% OFF",
    affiliate_url: "https://www.amazon.com/dp/B01HSMRWNU?tag=signupcodes-20",
    category: "books-education",
    isFeatured: true
  },
  {
    id: "17",
    title: "Amazon Fire TV Stick 4K Max Streaming Device",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop&crop=center",
    price: "$34.99",
    originalPrice: "$54.99",
    rating: 4.6,
    reviews: 345678,
    deal: "STREAM: 36% OFF",
    affiliate_url: "https://www.amazon.com/dp/B08MQZXN1X?tag=signupcodes-20",
    category: "tech-gadgets"
  },
  {
    id: "18",
    title: "Revlon One-Step Hair Dryer and Volumizer Hot Air Brush",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618b?w=400&h=400&fit=crop&crop=center",
    price: "$41.88",
    originalPrice: "$59.99",
    rating: 4.2,
    reviews: 456789,
    deal: "BEAUTY: 30% OFF",
    affiliate_url: "https://www.amazon.com/dp/B01LSUQSB0?tag=signupcodes-20",
    category: "beauty-personal-care"
  },
  {
    id: "19",
    title: "CeraVe Moisturizing Cream for Normal to Dry Skin",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
    price: "$16.08",
    originalPrice: "$23.99",
    rating: 4.7,
    reviews: 234567,
    deal: "SKINCARE: 33% OFF",
    affiliate_url: "https://www.amazon.com/dp/B00TTD9BRC?tag=signupcodes-20",
    category: "beauty-personal-care"
  },
  {
    id: "20",
    title: "LifeStraw Personal Water Filter for Hiking Camping",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    price: "$19.95",
    originalPrice: "$29.95",
    rating: 4.4,
    reviews: 123457,
    deal: "OUTDOOR: 33% OFF",
    affiliate_url: "https://www.amazon.com/dp/B006QF3TW4?tag=signupcodes-20",
    category: "outdoor-sports"
  }
];

export const featuredProducts = sampleProducts.filter(product => product.isFeatured);
export const latestDeals = sampleProducts.slice(0, 5);