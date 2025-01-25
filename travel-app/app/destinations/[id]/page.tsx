import BookingCard from "@/components/BookingCard";


export function generateStaticParams() {
  return destinations.map((destination) => ({
    id: destination.id.toString(),
  }));
}

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Experience the stunning sunsets and white-washed architecture of Santorini.",
    longDescription: "Discover the magic of Santorini, where dramatic cliffs meet the crystal-clear waters of the Aegean Sea. This iconic Greek island is famous for its stunning sunsets, white-washed buildings with blue domes, and rich history. Explore charming villages, visit local wineries, and relax on unique volcanic beaches.",
    price: 1299,
    rating: 4.9,
    duration: "7 days",
    activities: ["Island Tours", "Wine Tasting", "Sunset Cruise", "Beach Hopping"],
    highlights: ["Oia Village", "Red Beach", "Ancient Thera", "Fira"],
    included: [
      "Luxury accommodation",
      "Daily breakfast",
      "Guided tours",
      "Airport transfers",
      "Welcome drink",
      "24/7 support"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a",
      "https://images.unsplash.com/photo-1602088113235-229c19758e9f"
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        comment: "Absolutely breathtaking! The tour was perfectly organized.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      {
        name: "Michael Chen",
        rating: 4.8,
        comment: "Great experience, professional guides, amazing views!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      }
    ]
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Discover tropical paradise with pristine beaches and lush landscapes.",
    longDescription: "Experience the magic of Bali, an Indonesian paradise that offers a perfect blend of natural beauty, rich culture, and modern luxury. From pristine beaches and terraced rice fields to ancient temples and vibrant markets, Bali provides an unforgettable escape.",
    price: 999,
    rating: 4.8,
    duration: "5 days",
    activities: ["Temple Visits", "Surfing", "Rice Terrace Tours", "Spa Treatments"],
    highlights: ["Ubud", "Uluwatu Temple", "Tegalalang", "Nusa Dua"],
    included: [
      "Beachfront accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Cultural tours",
      "Spa session",
      "Local guide"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1"
    ],
    reviews: [
      {
        name: "Emma Wilson",
        rating: 4.9,
        comment: "Paradise found! The perfect mix of relaxation and adventure.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      {
        name: "David Thompson",
        rating: 4.7,
        comment: "Incredible cultural experience and beautiful landscapes.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      }
    ]
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    description: "Explore the ancient Incan citadel set high in the Andes Mountains.",
    longDescription: "Journey to the heart of the ancient Inca Empire at Machu Picchu, one of the world's most spectacular archaeological sites. This UNESCO World Heritage site offers breathtaking mountain vistas, fascinating history, and an unforgettable hiking experience.",
    price: 1499,
    rating: 4.9,
    duration: "8 days",
    activities: ["Hiking", "Archaeological Tours", "Cultural Experiences", "Mountain Biking"],
    highlights: ["Inca Trail", "Sacred Valley", "Cusco", "Rainbow Mountain"],
    included: [
      "Mountain lodge accommodation",
      "All meals",
      "Expert guides",
      "Train tickets",
      "Entrance fees",
      "Equipment rental"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4",
      "https://images.unsplash.com/photo-1589087575290-519f528aef56"
    ],
    reviews: [
      {
        name: "John Martinez",
        rating: 5.0,
        comment: "Life-changing experience! The guides were exceptional.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Lisa Chen",
        rating: 4.8,
        comment: "Perfectly organized trek with stunning views throughout.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description: "Immerse yourself in the perfect blend of tradition and modernity.",
    longDescription:
      "Tokyo, Japan's bustling capital, offers an extraordinary mix of ancient culture and cutting-edge innovation. Explore iconic landmarks, serene temples, and savor authentic Japanese cuisine during your visit to this vibrant city.",
    price: 1799,
    rating: 4.8,
    duration: "6 days",
    activities: ["City Tours", "Tea Ceremonies", "Sushi Making", "Temple Visits"],
    highlights: ["Shibuya", "Senso-ji", "Mount Fuji", "Akihabara"],
    included: [
      "Hotel accommodation",
      "Daily breakfast",
      "Local transportation",
      "Entrance fees",
      "Expert guides"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1523875194681-bedd468c58bf",
      "https://images.unsplash.com/photo-1544373757-8f7119b7e7e6"
    ],
    reviews: [
      {
        name: "Hiro Tanaka",
        rating: 5.0,
        comment: "An unforgettable cultural experience with so much to see!",
        image: "https://images.unsplash.com/photo-1504593811423-6dd665756598"
      },
      {
        name: "Samantha Lee",
        rating: 4.7,
        comment: "Tokyo is a mesmerizing mix of the old and the new. Loved it!",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
      }
    ]
  },
  {
    id: 5,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    description: "Experience luxury and tranquility in overwater bungalows.",
    longDescription:
      "Escape to the Maldives, a tropical paradise known for its pristine beaches, crystal-clear waters, and unparalleled luxury. Relax in overwater villas, indulge in world-class cuisine, and enjoy endless water activities.",
    price: 2499,
    rating: 4.9,
    duration: "5 days",
    activities: ["Snorkeling", "Spa Treatments", "Sunset Cruises", "Water Sports"],
    highlights: ["Male", "Maafushi", "Hulhumale", "Biyadhoo"],
    included: [
      "Overwater bungalow stay",
      "All-inclusive meals",
      "Airport transfers",
      "Snorkeling gear rental",
      "Island excursions"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
      "https://images.unsplash.com/photo-1501924458366-5233593bc008"
    ],
    reviews: [
      {
        name: "Emily Carter",
        rating: 5.0,
        comment: "Pure paradise! The bungalows were breathtaking.",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
      },
      {
        name: "Michael Davis",
        rating: 4.9,
        comment: "Amazing hospitality and stunning natural beauty.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
      }
    ]
  },
  {
    id: 6,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    description: "Discover breathtaking mountain landscapes and charming villages.",
    longDescription:
      "The Swiss Alps, a haven for nature lovers, boast stunning peaks, picturesque villages, and exciting outdoor adventures. Enjoy world-class skiing, scenic hikes, and unique cultural experiences.",
    price: 1899,
    rating: 4.8,
    duration: "7 days",
    activities: ["Skiing", "Hiking", "Cable Car Rides", "Cheese Tasting"],
    highlights: ["Zermatt", "Interlaken", "Lucerne", "Jungfraujoch"],
    included: [
      "Chalet accommodation",
      "Daily breakfast and dinner",
      "Ski pass and equipment",
      "Cable car tickets",
      "Expert mountain guides"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
      "https://images.unsplash.com/photo-1516900557540-d3d0a13ff351",
      "https://images.unsplash.com/photo-1520901157991-4dcf86c60bb9",
      "https://images.unsplash.com/photo-1551933804-513d084b63e9"
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 4.8,
        comment: "Breathtaking views and unforgettable skiing adventures.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
      },
      {
        name: "Daniel Weber",
        rating: 4.7,
        comment: "The perfect mix of adventure and relaxation. Loved it!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
      }
    ]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function DestinationDetail() {
  

  return (
    <>
      <BookingCard />
    </>
  );
}