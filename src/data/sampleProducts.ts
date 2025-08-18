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
    title: "Apple AirPods Pro (2nd Gen) - Wireless Noise Cancelling",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop&crop=center",
    price: "$169.99",
    originalPrice: "$249.99",
    rating: 4.8,
    reviews: 24847,
    deal: "TODAY ONLY: Save $80",
    affiliate_url: "https://www.amazon.com/dp/B0BDHWDR12?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "2",
    title: "Samsung Galaxy Watch 6 - Advanced Health Monitoring",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    price: "$259.99",
    originalPrice: "$399.99",
    rating: 4.7,
    reviews: 18934,
    deal: "FLASH DEAL: 35% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0C9KYV91Q?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "3",
    title: "Sony WH-1000XM5 - World's Best Noise Cancelling",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
    price: "$299.99",
    originalPrice: "$399.99",
    rating: 4.9,
    reviews: 31234,
    deal: "EXCLUSIVE: $100 OFF",
    affiliate_url: "https://www.amazon.com/dp/B09XJ5B38Q?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "4",
    title: "Echo Dot (5th Gen) - #1 Smart Speaker with Alexa",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop&crop=center",
    price: "$22.99",
    originalPrice: "$49.99",
    rating: 4.7,
    reviews: 256789,
    deal: "PRIME DEAL: 54% OFF",
    affiliate_url: "https://www.amazon.com/dp/B09B8V1LZ3?tag=signupcodes-20",
    category: "tech-gadgets"
  },
  {
    id: "5",
    title: "Apple iPhone 15 USB-C Cable - Fast Charging 20W",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop&crop=center",
    price: "$16.99",
    originalPrice: "$29.99",
    rating: 4.6,
    reviews: 43456,
    deal: "#1 SELLER: 43% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0BDHB9Y8W?tag=signupcodes-20",
    category: "tech-gadgets"
  },
  {
    id: "6",
    title: "Anker PowerCore 10000 - Ultra-Compact Power Bank",
    image: "https://images.unsplash.com/photo-1609592806615-7e6baa264bd9?w=400&h=400&fit=crop&crop=center",
    price: "$17.99",
    originalPrice: "$35.99",
    rating: 4.8,
    reviews: 127892,
    deal: "LIGHTNING: Save $18",
    affiliate_url: "https://www.amazon.com/dp/B019GJLER8?tag=signupcodes-20",
    category: "tech-gadgets"
  },

  // HOME & KITCHEN - High Converting Products
  {
    id: "7",
    title: "Instant Pot Duo 7-in-1 - America's #1 Pressure Cooker",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    price: "$59.99",
    originalPrice: "$99.99",
    rating: 4.9,
    reviews: 434567,
    deal: "TOP RATED: Save $40",
    affiliate_url: "https://www.amazon.com/dp/B07GBZ4Q68?tag=signupcodes-20",
    category: "home-kitchen",
    isFeatured: true
  },
  {
    id: "8",
    title: "Ninja Foodi Personal Blender - Perfect Single Serve",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center",
    price: "$34.99",
    originalPrice: "$79.99",
    rating: 4.6,
    reviews: 28934,
    deal: "MEGA SAVE: 56% OFF",
    affiliate_url: "https://www.amazon.com/dp/B091J4NJHF?tag=signupcodes-20",
    category: "home-kitchen"
  },
  {
    id: "9",
    title: "Keurig K-Mini - Single Serve Coffee Maker",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop&crop=center",
    price: "$49.99",
    originalPrice: "$89.99",
    rating: 4.7,
    reviews: 65623,
    deal: "COFFEE LOVER: 44% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0BQBQZDFX?tag=signupcodes-20",
    category: "home-kitchen"
  },
  {
    id: "10",
    title: "Lodge Cast Iron Skillet - Pre-Seasoned 10.25\"",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    price: "$19.90",
    originalPrice: "$34.90",
    rating: 4.9,
    reviews: 178901,
    deal: "CHEF'S PICK: Save $15",
    affiliate_url: "https://www.amazon.com/dp/B00006JSUB?tag=signupcodes-20",
    category: "home-kitchen"
  },
  {
    id: "11",
    title: "Shark Navigator Professional - Pet Hair Specialist",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    price: "$99.99",
    originalPrice: "$199.99",
    rating: 4.6,
    reviews: 54567,
    deal: "SPRING CLEAN: 50% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0772DSFN9?tag=signupcodes-20",
    category: "home-kitchen"
  },

  // HEALTH & FITNESS - Wellness Focused
  {
    id: "12",
    title: "Fitbit Charge 5 - Advanced Health & GPS Tracker",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop&crop=center",
    price: "$119.95",
    originalPrice: "$199.95",
    rating: 4.5,
    reviews: 45621,
    deal: "FITNESS GOAL: Save $80",
    affiliate_url: "https://www.amazon.com/dp/B0B2TZMQB9?tag=signupcodes-20",
    category: "health-fitness",
    isFeatured: true
  },
  {
    id: "13",
    title: "Optimum Whey Protein - 5lb Gold Standard",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop&crop=center",
    price: "$44.99",
    originalPrice: "$69.99",
    rating: 4.7,
    reviews: 256789,
    deal: "BULK SAVE: $25 OFF",
    affiliate_url: "https://amzn.to/optimum-whey",
    category: "health-fitness"
  },
  {
    id: "14",
    title: "Total Resistance Bands Set - 11pc Home Gym",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    price: "$14.99",
    originalPrice: "$39.99",
    rating: 4.6,
    reviews: 43456,
    deal: "HOME GYM: 63% OFF",
    affiliate_url: "https://amzn.to/resistance-bands",
    category: "health-fitness"
  },
  {
    id: "15",
    title: "High Density Foam Roller - Deep Tissue Recovery",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$39.99",
    rating: 4.8,
    reviews: 54567,
    deal: "RECOVERY: Save $20",
    affiliate_url: "https://amzn.to/foam-roller",
    category: "health-fitness"
  },
  {
    id: "16",
    title: "Premium Yoga Mat - Extra Thick 15mm Non-Slip",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center",
    price: "$24.99",
    originalPrice: "$49.99",
    rating: 4.7,
    reviews: 38234,
    deal: "NAMASTE: 50% OFF",
    affiliate_url: "https://amzn.to/yoga-mat",
    category: "health-fitness"
  },

  // FASHION & BEAUTY - NEW CATEGORY
  {
    id: "17",
    title: "Revlon One-Step Hair Dryer - #1 Beauty Tool",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618b?w=400&h=400&fit=crop&crop=center",
    price: "$24.99",
    originalPrice: "$59.99",
    rating: 4.6,
    reviews: 89456,
    deal: "BEAUTY STEAL: 58% OFF",
    affiliate_url: "https://amzn.to/revlon-dryer",
    category: "fashion-beauty",
    isFeatured: true
  },
  {
    id: "18",
    title: "CeraVe Daily Moisturizing Lotion - Dermatologist Choice",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
    price: "$12.99",
    originalPrice: "$19.99",
    rating: 4.8,
    reviews: 167890,
    deal: "SKIN CARE: 35% OFF",
    affiliate_url: "https://amzn.to/cerave-lotion",
    category: "fashion-beauty"
  },
  {
    id: "19",
    title: "Levi's 501 Original Fit Jeans - Classic American",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
    price: "$39.99",
    originalPrice: "$69.99",
    rating: 4.7,
    reviews: 34567,
    deal: "ICONIC: Save $30",
    affiliate_url: "https://amzn.to/levis-501",
    category: "fashion-beauty"
  },
  {
    id: "20",
    title: "The Ordinary Niacinamide - 10% + Zinc Serum",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
    price: "$6.99",
    originalPrice: "$12.99",
    rating: 4.5,
    reviews: 78901,
    deal: "GLOW UP: 46% OFF",
    affiliate_url: "https://amzn.to/ordinary-serum",
    category: "fashion-beauty"
  },
  {
    id: "21",
    title: "Champion PowerFlex Men's Boxer Briefs - 5 Pack",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$34.99",
    rating: 4.6,
    reviews: 23456,
    deal: "COMFORT: 43% OFF",
    affiliate_url: "https://amzn.to/champion-boxers",
    category: "fashion-beauty"
  },

  // BOOKS & EDUCATION - NEW CATEGORY
  {
    id: "22",
    title: "Atomic Habits by James Clear - #1 Self-Help Book",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&crop=center",
    price: "$11.98",
    originalPrice: "$18.99",
    rating: 4.9,
    reviews: 234567,
    deal: "BESTSELLER: 37% OFF",
    affiliate_url: "https://amzn.to/atomic-habits",
    category: "books-education",
    isFeatured: true
  },
  {
    id: "23",
    title: "MasterClass Annual Membership - Learn from Experts",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center",
    price: "$120.00",
    originalPrice: "$180.00",
    rating: 4.8,
    reviews: 45678,
    deal: "LIMITED: Save $60",
    affiliate_url: "https://masterclass.com/refer/signupcodes",
    category: "books-education"
  },
  {
    id: "24",
    title: "Think and Grow Rich - Napoleon Hill Classic",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&crop=center",
    price: "$7.99",
    originalPrice: "$15.99",
    rating: 4.7,
    reviews: 89012,
    deal: "MINDSET: 50% OFF",
    affiliate_url: "https://amzn.to/think-grow-rich",
    category: "books-education"
  },
  {
    id: "25",
    title: "The 7 Habits of Highly Effective People - Covey",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&crop=center",
    price: "$9.99",
    originalPrice: "$17.99",
    rating: 4.8,
    reviews: 156789,
    deal: "SUCCESS: 44% OFF",
    affiliate_url: "https://amzn.to/7-habits",
    category: "books-education"
  },
  {
    id: "26",
    title: "Udemy Business Annual - 7000+ Courses Access",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center",
    price: "$360.00",
    originalPrice: "$480.00",
    rating: 4.6,
    reviews: 23456,
    deal: "LEARN MORE: 25% OFF",
    affiliate_url: "https://udemy.com/affiliate/signupcodes",
    category: "books-education"
  },

  // TRAVEL & LIFESTYLE - Adventure Ready
  {
    id: "27",
    title: "YETI Rambler 20oz - Stainless Steel Tumbler",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop&crop=center",
    price: "$24.99",
    originalPrice: "$35.00",
    rating: 4.8,
    reviews: 39876,
    deal: "ADVENTURE: Save $10",
    affiliate_url: "https://amzn.to/yeti-rambler",
    category: "travel-lifestyle"
  },
  {
    id: "28",
    title: "Samsonite Winfield 2 - Hardside Luggage 28\"",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    price: "$129.99",
    originalPrice: "$209.99",
    rating: 4.7,
    reviews: 22345,
    deal: "TRAVEL READY: 38% OFF",
    affiliate_url: "https://amzn.to/samsonite-luggage",
    category: "travel-lifestyle"
  },
  {
    id: "29",
    title: "Anker Portable Charger 20000mAh - Fast Charging",
    image: "https://images.unsplash.com/photo-1609592806615-7e6baa264bd9?w=400&h=400&fit=crop&crop=center",
    price: "$24.99",
    originalPrice: "$49.99",
    rating: 4.6,
    reviews: 76789,
    deal: "NEVER DIE: 50% OFF",
    affiliate_url: "https://amzn.to/anker-20000",
    category: "travel-lifestyle"
  },
  {
    id: "30",
    title: "Premium Packing Cubes - 6 Set Travel Organizer",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    price: "$16.99",
    originalPrice: "$34.99",
    rating: 4.8,
    reviews: 43456,
    deal: "ORGANIZE: 51% OFF",
    affiliate_url: "https://amzn.to/packing-cubes",
    category: "travel-lifestyle"
  },
  {
    id: "31",
    title: "Hydro Flask Water Bottle - 32oz Stainless Steel",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop&crop=center",
    price: "$32.95",
    originalPrice: "$44.95",
    rating: 4.9,
    reviews: 87890,
    deal: "HYDRATE: Save $12",
    affiliate_url: "https://amzn.to/hydro-flask",
    category: "travel-lifestyle"
  },
  {
    id: "32",
    title: "Bluetooth Sleep Mask - Wireless Headphones",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=400&fit=crop&crop=center",
    price: "$16.99",
    originalPrice: "$39.99",
    rating: 4.5,
    reviews: 54567,
    deal: "SLEEP BETTER: 58% OFF",
    affiliate_url: "https://amzn.to/sleep-mask",
    category: "travel-lifestyle"
  }
];

export const featuredProducts = sampleProducts.filter(product => product.isFeatured);
export const latestDeals = sampleProducts.slice(0, 5);