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
    title: "Apple AirPods Pro (2nd Gen) - Active Noise Cancelling",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop&crop=center",
    price: "$179.99",
    originalPrice: "$249.99",
    rating: 4.8,
    reviews: 12847,
    deal: "FLASH SALE: 28% OFF",
    affiliate_url: "https://amazon.com/dp/B0BDHWDR12",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "2",
    title: "Samsung Galaxy Watch 6 - Advanced Health Tracking",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    price: "$279.99",
    originalPrice: "$399.99",
    rating: 4.7,
    reviews: 8934,
    deal: "LIMITED TIME: 30% OFF",
    affiliate_url: "https://amazon.com/dp/B0C4KGN7R4",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "3",
    title: "Sony WH-1000XM5 - Industry Leading Noise Cancel",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
    price: "$329.99",
    originalPrice: "$399.99",
    rating: 4.9,
    reviews: 15234,
    deal: "TODAY ONLY: $70 OFF",
    affiliate_url: "https://amazon.com/dp/B09XS7JWHH",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "4",
    title: "Echo Dot (5th Gen) - Smart Speaker with Alexa",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop&crop=center",
    price: "$29.99",
    originalPrice: "$49.99",
    rating: 4.7,
    reviews: 156789,
    deal: "FLASH DEAL: 40% OFF",
    affiliate_url: "https://amazon.com/dp/B09B8V1LZ3",
    category: "tech-gadgets"
  },
  {
    id: "5",
    title: "Apple iPhone 15 Fast Charging Cable - USB-C",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$29.99",
    rating: 4.6,
    reviews: 23456,
    deal: "BEST SELLER: 33% OFF",
    affiliate_url: "https://amazon.com/dp/B0C6JXJ8FZ",
    category: "tech-gadgets"
  },
  {
    id: "6",
    title: "Anker PowerCore 10000 - Ultra-Compact Power Bank",
    image: "https://images.unsplash.com/photo-1609592806615-7e6baa264bd9?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$35.99",
    rating: 4.8,
    reviews: 67892,
    deal: "LIGHTNING DEAL: 44% OFF",
    affiliate_url: "https://amazon.com/dp/B01CU1EC6Y",
    category: "tech-gadgets"
  },

  // HOME & KITCHEN - High Converting Products
  {
    id: "7",
    title: "Instant Pot Duo 7-in-1 - 6 Quart Pressure Cooker",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    price: "$69.99",
    originalPrice: "$99.99",
    rating: 4.9,
    reviews: 234567,
    deal: "TOP RATED: 30% OFF",
    affiliate_url: "https://amazon.com/dp/B00FLYWNYQ",
    category: "home-kitchen",
    isFeatured: true
  },
  {
    id: "8",
    title: "Ninja Foodi Personal Blender - 18oz Travel Cup",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center",
    price: "$39.99",
    originalPrice: "$79.99",
    rating: 4.6,
    reviews: 18934,
    deal: "MEGA SALE: 50% OFF",
    affiliate_url: "https://amazon.com/dp/B07GBZ1XYZ",
    category: "home-kitchen"
  },
  {
    id: "9",
    title: "Keurig K-Mini Coffee Maker - Single Serve K-Cup",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop&crop=center",
    price: "$59.99",
    originalPrice: "$89.99",
    rating: 4.7,
    reviews: 45623,
    deal: "HOT DEAL: 33% OFF",
    affiliate_url: "https://amazon.com/dp/B07GV2S1GS",
    category: "home-kitchen"
  },
  {
    id: "10",
    title: "OXO Good Grips 3-Piece Mixing Bowl Set",
    image: "https://images.unsplash.com/photo-1556909144-f4822b2d32cc?w=400&h=400&fit=crop&crop=center",
    price: "$29.99",
    originalPrice: "$49.95",
    rating: 4.8,
    reviews: 12456,
    deal: "KITCHEN ESSENTIAL: 40% OFF",
    affiliate_url: "https://amazon.com/dp/B00004OCNT",
    category: "home-kitchen"
  },
  {
    id: "11",
    title: "Lodge Cast Iron Skillet - Pre-Seasoned 10.25 Inch",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    price: "$24.90",
    originalPrice: "$34.90",
    rating: 4.9,
    reviews: 78901,
    deal: "CHEF'S CHOICE: 29% OFF",
    affiliate_url: "https://amazon.com/dp/B00006JSUB",
    category: "home-kitchen"
  },
  {
    id: "12",
    title: "Shark Navigator Lift-Away - Professional Vacuum",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    price: "$129.99",
    originalPrice: "$199.99",
    rating: 4.6,
    reviews: 34567,
    deal: "SPRING CLEAN: 35% OFF",
    affiliate_url: "https://amazon.com/dp/B01KQDDTG6",
    category: "home-kitchen"
  },

  // HEALTH & FITNESS - Wellness Focused
  {
    id: "13",
    title: "Fitbit Charge 5 - Advanced Health & GPS Tracker",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop&crop=center",
    price: "$129.95",
    originalPrice: "$199.95",
    rating: 4.5,
    reviews: 25621,
    deal: "FITNESS GOAL: 35% OFF",
    affiliate_url: "https://amazon.com/dp/B096C6FGR8",
    category: "health-fitness",
    isFeatured: true
  },
  {
    id: "14",
    title: "Whey Protein Powder - 5lb Chocolate by Optimum",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop&crop=center",
    price: "$49.99",
    originalPrice: "$69.99",
    rating: 4.7,
    reviews: 156789,
    deal: "BULK SAVE: 29% OFF",
    affiliate_url: "https://amazon.com/dp/B000QSNYGI",
    category: "health-fitness"
  },
  {
    id: "15",
    title: "Resistance Bands Set - 11pc with Door Anchor",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$39.99",
    rating: 4.6,
    reviews: 23456,
    deal: "HOME GYM: 50% OFF",
    affiliate_url: "https://amazon.com/dp/B071NTSB4G",
    category: "health-fitness"
  },
  {
    id: "16",
    title: "Foam Roller - High Density for Deep Tissue",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    price: "$24.99",
    originalPrice: "$39.99",
    rating: 4.8,
    reviews: 34567,
    deal: "RECOVERY: 38% OFF",
    affiliate_url: "https://amazon.com/dp/B00XM2MRGI",
    category: "health-fitness"
  },
  {
    id: "17",
    title: "Yoga Mat - Extra Thick 15mm Non-Slip Exercise",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center",
    price: "$29.99",
    originalPrice: "$49.99",
    rating: 4.7,
    reviews: 18234,
    deal: "NAMASTE: 40% OFF",
    affiliate_url: "https://amazon.com/dp/B071WNXQZ4",
    category: "health-fitness"
  },
  {
    id: "18",
    title: "Multivitamin Gummies - 90 Count Adult Formula",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center",
    price: "$14.99",
    originalPrice: "$24.99",
    rating: 4.6,
    reviews: 45678,
    deal: "WELLNESS: 40% OFF",
    affiliate_url: "https://amazon.com/dp/B074H2KLX8",
    category: "health-fitness"
  },

  // TRAVEL & LIFESTYLE - Adventure Ready
  {
    id: "19",
    title: "YETI Rambler 20oz - Stainless Steel Travel Mug",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop&crop=center",
    price: "$24.99",
    originalPrice: "$35.00",
    rating: 4.8,
    reviews: 19876,
    deal: "ADVENTURE: 29% OFF",
    affiliate_url: "https://amazon.com/dp/B073WS8Q6F",
    category: "travel-lifestyle"
  },
  {
    id: "20",
    title: "Samsonite Winfield 2 - Hardside Luggage 28 Inch",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    price: "$139.99",
    originalPrice: "$209.99",
    rating: 4.7,
    reviews: 12345,
    deal: "TRAVEL READY: 33% OFF",
    affiliate_url: "https://amazon.com/dp/B01J24H2K0",
    category: "travel-lifestyle"
  },
  {
    id: "21",
    title: "Portable Charger 20000mAh - Fast Charging Power",
    image: "https://images.unsplash.com/photo-1609592806615-7e6baa264bd9?w=400&h=400&fit=crop&crop=center",
    price: "$29.99",
    originalPrice: "$49.99",
    rating: 4.6,
    reviews: 56789,
    deal: "NEVER DIE: 40% OFF",
    affiliate_url: "https://amazon.com/dp/B08T5QVTKJ",
    category: "travel-lifestyle"
  },
  {
    id: "22",
    title: "Travel Packing Cubes - 6 Set Luggage Organizer",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$34.99",
    rating: 4.8,
    reviews: 23456,
    deal: "ORGANIZE: 43% OFF",
    affiliate_url: "https://amazon.com/dp/B014VBICZ0",
    category: "travel-lifestyle"
  },
  {
    id: "23",
    title: "Hydro Flask Water Bottle - 32oz Stainless Steel",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop&crop=center",
    price: "$34.95",
    originalPrice: "$44.95",
    rating: 4.9,
    reviews: 67890,
    deal: "HYDRATE: 22% OFF",
    affiliate_url: "https://amazon.com/dp/B077JBQZPX",
    category: "travel-lifestyle"
  },
  {
    id: "24",
    title: "Bluetooth Sleep Mask - Wireless Music Headphones",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$39.99",
    rating: 4.5,
    reviews: 34567,
    deal: "SLEEP BETTER: 50% OFF",
    affiliate_url: "https://amazon.com/dp/B07SHBQY7Z",
    category: "travel-lifestyle"
  }
];

export const featuredProducts = sampleProducts.filter(product => product.isFeatured);
export const latestDeals = sampleProducts.slice(0, 5);