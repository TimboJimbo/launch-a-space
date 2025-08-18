export interface ProductComparison {
  id: string;
  title: string;
  category: string;
  products: ComparisonProduct[];
}

export interface ComparisonProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  affiliate_url: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  rating: number;
  keySpecs: { [key: string]: string };
}

export const productComparisons: ProductComparison[] = [
  {
    id: "wireless-headphones-comparison",
    title: "Top Wireless Headphones Comparison",
    category: "tech-gadgets",
    products: [
      {
        id: "sony-wh-1000xm5",
        name: "Sony WH-1000XM5",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        price: "$328.00",
        originalPrice: "$399.99", 
        affiliate_url: "https://www.amazon.com/dp/B09XJ5B38Q?tag=signupcodes-20",
        pros: [
          "Industry-leading noise cancellation",
          "30-hour battery life",
          "Premium build quality",
          "Excellent call quality"
        ],
        cons: [
          "Premium price point",
          "Not foldable design",
          "Limited customization options"
        ],
        bestFor: "Frequent travelers and audiophiles",
        rating: 4.7,
        keySpecs: {
          "Battery Life": "30 hours",
          "Noise Cancellation": "Industry-leading",
          "Weight": "250g",
          "Bluetooth": "5.2",
          "Quick Charge": "3 min = 3 hours"
        }
      },
      {
        id: "apple-airpods-pro-2",
        name: "Apple AirPods Pro (2nd Gen)",
        image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300&h=300&fit=crop",
        price: "$179.99",
        originalPrice: "$249.99",
        affiliate_url: "https://www.amazon.com/dp/B0BDHWDR12?tag=signupcodes-20",
        pros: [
          "Seamless iOS integration",
          "Excellent spatial audio",
          "Compact and portable",
          "Active noise cancellation"
        ],
        cons: [
          "Shorter battery life per charge",
          "Premium pricing",
          "Easy to lose due to size"
        ],
        bestFor: "iPhone users who prioritize portability",
        rating: 4.8,
        keySpecs: {
          "Battery Life": "6 hours + 24 with case",
          "Noise Cancellation": "Active ANC",
          "Weight": "5.3g per bud",
          "Bluetooth": "5.3",
          "Water Resistance": "IPX4"
        }
      },
      {
        id: "bose-quietcomfort-45",
        name: "Bose QuietComfort 45",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        price: "$229.00",
        originalPrice: "$329.00",
        affiliate_url: "https://www.amazon.com/dp/B098FKXT8L?tag=signupcodes-20",
        pros: [
          "Legendary Bose comfort",
          "Excellent noise cancellation",
          "24-hour battery life",
          "Foldable design"
        ],
        cons: [
          "Older Bluetooth version",
          "Limited touch controls",
          "No multipoint connection"
        ],
        bestFor: "All-day comfort and reliable ANC",
        rating: 4.5,
        keySpecs: {
          "Battery Life": "24 hours",
          "Noise Cancellation": "Bose ANC",
          "Weight": "238g",
          "Bluetooth": "5.1", 
          "Quick Charge": "15 min = 3 hours"
        }
      }
    ]
  },
  {
    id: "smart-plugs-comparison",
    title: "Best Smart Plugs Comparison",
    category: "smart-home",
    products: [
      {
        id: "tp-link-kasa-ep25",
        name: "TP-Link Kasa Smart Plug EP25",
        image: "https://images.unsplash.com/photo-1609198092587-b7c0421c86d3?w=300&h=300&fit=crop",
        price: "$12.99",
        originalPrice: "$19.99",
        affiliate_url: "https://www.amazon.com/dp/B07B8W2KHZ?tag=signupcodes-20",
        pros: [
          "Excellent app interface",
          "Energy monitoring",
          "Voice control support",
          "Reliable connectivity"
        ],
        cons: [
          "Blocks second outlet",
          "No hub required but WiFi dependent",
          "Limited to 2.4GHz networks"
        ],
        bestFor: "First-time smart home users",
        rating: 4.6,
        keySpecs: {
          "Max Load": "15A",
          "WiFi": "2.4GHz only",
          "Voice Control": "Alexa, Google",
          "Energy Monitor": "Yes",
          "Dimensions": "2.5 x 1.5 x 3.7 in"
        }
      },
      {
        id: "amazon-smart-plug",
        name: "Amazon Smart Plug",
        image: "https://images.unsplash.com/photo-1609198092587-b7c0421c86d3?w=300&h=300&fit=crop",
        price: "$9.99",
        originalPrice: "$14.99", 
        affiliate_url: "https://www.amazon.com/dp/B089DR29T6?tag=signupcodes-20",
        pros: [
          "Budget-friendly price",
          "Perfect Alexa integration",
          "Simple setup process",
          "Compact design"
        ],
        cons: [
          "No energy monitoring",
          "Basic app features",
          "Alexa ecosystem only"
        ],
        bestFor: "Alexa users on a budget",
        rating: 4.4,
        keySpecs: {
          "Max Load": "15A",
          "WiFi": "2.4GHz only", 
          "Voice Control": "Alexa only",
          "Energy Monitor": "No",
          "Dimensions": "2.3 x 1.6 x 3.5 in"
        }
      }
    ]
  }
];