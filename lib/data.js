// Central data store for Where we Travel
// Real photographic images sourced from Unsplash (royalty-free)

export const destinations = [
  {
    slug: "santorini-greece",
    name: "Santorini",
    country: "Greece",
    price: 650,
    rating: 4.8,
    reviews: 1284,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "Whitewashed cliffside villages, blue-domed churches, and legendary sunsets over the Aegean Sea make Santorini one of the most photographed destinations on Earth.",
    tags: ["Beaches", "Romance", "Food"],
  },
  {
    slug: "dubai-uae",
    name: "Dubai",
    country: "UAE",
    price: 720,
    rating: 4.7,
    reviews: 2043,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "A futuristic desert metropolis of record-breaking towers, luxury shopping, and golden dunes just minutes from the skyline.",
    tags: ["Luxury", "Shopping", "Adventure"],
  },
  {
    slug: "bali-indonesia",
    name: "Bali",
    country: "Indonesia",
    price: 480,
    rating: 4.9,
    reviews: 3170,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "Lush rice terraces, ancient temples, and world-class surf breaks combine on this Indonesian island paradise.",
    tags: ["Beaches", "Nature", "Wellness"],
  },
  {
    slug: "paris-france",
    name: "Paris",
    country: "France",
    price: 590,
    rating: 4.6,
    reviews: 4520,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "The City of Light offers world-class museums, iconic landmarks, and unforgettable cuisine along the Seine.",
    tags: ["Culture", "Museums", "Food"],
  },
  {
    slug: "tokyo-japan",
    name: "Tokyo",
    country: "Japan",
    price: 810,
    rating: 4.8,
    reviews: 2871,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "A dazzling blend of neon-lit streets, ancient temples, and world-renowned cuisine in one of the world's most exciting cities.",
    tags: ["Culture", "Food", "Technology"],
  },
  {
    slug: "marrakech-morocco",
    name: "Marrakech",
    country: "Morocco",
    price: 390,
    rating: 4.6,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1553603227374-98e5748db6f1?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553603227374-98e5748db6f1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "Vibrant souks, ornate palaces, and the dramatic backdrop of the Atlas Mountains make Marrakech an unforgettable escape.",
    tags: ["Culture", "Adventure", "Food"],
  },
];

export const deals = [
  {
    id: "deal-1",
    title: "Santorini Getaway",
    type: "Flight + Hotel",
    destination: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    originalPrice: 980,
    price: 699,
    discount: 29,
    validUntil: "2026-09-30",
  },
  {
    id: "deal-2",
    title: "Dubai Luxury Escape",
    type: "5-Star Hotel",
    destination: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
    originalPrice: 1200,
    price: 890,
    discount: 26,
    validUntil: "2026-10-15",
  },
  {
    id: "deal-3",
    title: "Bali Island Retreat",
    type: "Flight + Villa",
    destination: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    originalPrice: 750,
    price: 520,
    discount: 31,
    validUntil: "2026-09-20",
  },
  {
    id: "deal-4",
    title: "Paris City Break",
    type: "Flight Only",
    destination: "Paris, France",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
    originalPrice: 420,
    price: 310,
    discount: 26,
    validUntil: "2026-11-05",
  },
  {
    id: "deal-5",
    title: "Tokyo Explorer Package",
    type: "Flight + Hotel",
    destination: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1200&auto=format&fit=crop",
    originalPrice: 1450,
    price: 1050,
    discount: 28,
    validUntil: "2026-10-01",
  },
  {
    id: "deal-6",
    title: "Marrakech Desert Adventure",
    type: "Flight + Riad Stay",
    destination: "Marrakech, Morocco",
    image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=1200&auto=format&fit=crop",
    originalPrice: 580,
    price: 399,
    discount: 31,
    validUntil: "2026-09-25",
  },
];

export const events = [
  {
    id: "ev-1",
    title: "Santorini Wine Festival",
    location: "Santorini, Greece",
    date: "2026-09-12",
    image: "https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?q=80&w=1200&auto=format&fit=crop",
    category: "Food & Wine",
  },
  {
    id: "ev-2",
    title: "Dubai Shopping Festival",
    location: "Dubai, UAE",
    date: "2026-12-01",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop",
    category: "Shopping",
  },
  {
    id: "ev-3",
    title: "Bali Arts & Culture Festival",
    location: "Ubud, Bali",
    date: "2026-10-05",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop",
    category: "Culture",
  },
  {
    id: "ev-4",
    title: "Paris Fashion Week",
    location: "Paris, France",
    date: "2026-09-28",
    image: "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=1200&auto=format&fit=crop",
    category: "Fashion",
  },
  {
    id: "ev-5",
    title: "Tokyo Cherry Lights Festival",
    location: "Tokyo, Japan",
    date: "2026-11-15",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    category: "Culture",
  },
  {
    id: "ev-6",
    title: "Marrakech Desert Music Festival",
    location: "Marrakech, Morocco",
    date: "2026-10-20",
    image: "https://images.unsplash.com/photo-1553603227374-98e5748db6f1?q=80&w=1200&auto=format&fit=crop",
    category: "Music",
  },
];

export const blogPosts = [
  {
    slug: "santorini-travel-guide",
    title: "The Ultimate Santorini Travel Guide for First-Timers",
    excerpt:
      "Everything you need to know before visiting the Greek island of Santorini — from where to stay to when to catch the best sunsets.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1200&auto=format&fit=crop",
    author: "Layla Haddad",
    date: "2026-07-02",
    category: "Destination Guide",
    content:
      "Santorini is one of the most iconic islands in the world, known for its whitewashed buildings, blue-domed churches, and dramatic caldera views. The best time to visit is late spring or early autumn when the crowds thin out but the weather stays warm. Stay in Oia for the best sunset views, or Imerovigli for a quieter, equally stunning experience. Don't miss a boat tour around the volcanic caldera, and budget at least 4-5 days to properly explore both Fira and the island's black sand beaches.",
  },
  {
    slug: "budget-travel-tips",
    title: "10 Smart Budgeting Tips for Your Next International Trip",
    excerpt:
      "Learn how to stretch your travel budget further with these AI-backed strategies for flights, hotels, and daily spending.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
    author: "Omar Ben Salah",
    date: "2026-06-18",
    category: "Travel Tips",
    content:
      "Smart budgeting starts before you even book your flight. Set a realistic total budget and break it down by category: flights, accommodation, food, transportation, and entertainment. Booking flights on Tuesday afternoons often yields lower fares, and traveling during shoulder season can cut accommodation costs by 30% or more. Use a dedicated travel budget tracker — like the one built into Where we Travel — to monitor spending in real time and avoid surprises.",
  },
  {
    slug: "best-time-to-visit-bali",
    title: "When Is the Best Time to Visit Bali?",
    excerpt:
      "Dry season, rainy season, festival season — here's how to time your Bali trip perfectly based on what you want to experience.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    author: "Layla Haddad",
    date: "2026-05-30",
    category: "Destination Guide",
    content:
      "Bali's dry season runs from April to October and is the most popular time to visit thanks to sunny skies and low humidity. If you want fewer crowds, aim for the shoulder months of April-May or September. The wet season from November to March brings short but intense afternoon showers, though prices drop significantly and the island turns lush and green.",
  },
  {
    slug: "tokyo-food-guide",
    title: "A Food Lover's Guide to Tokyo",
    excerpt:
      "From Michelin-starred sushi counters to late-night ramen shops, here's how to eat your way through Tokyo.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    author: "Kenji Watanabe",
    date: "2026-04-22",
    category: "Food & Culture",
    content:
      "Tokyo has more Michelin stars than any other city in the world, but some of the best meals come from unassuming counters in Shinjuku and Shibuya. Try a sushi omakase in Ginza, ramen in Golden Gai, and don't skip the convenience store onigiri — it's a Tokyo rite of passage. Budget around $40-60 per day for food if you want a mix of street food and sit-down restaurants.",
  },
];

export const budgetBreakdown = [
  { label: "Flights", value: 850, pct: 29, color: "#0f3d5c" },
  { label: "Accommodation", value: 590, pct: 20, color: "#e8955f" },
  { label: "Food & Dining", value: 400, pct: 14, color: "#6fa8bf" },
  { label: "Transportation", value: 350, pct: 12, color: "#c9a35c" },
  { label: "Entertainment", value: 250, pct: 9, color: "#8a8fa3" },
  { label: "Others", value: 110, pct: 4, color: "#c4c9cf" },
];

export const testimonials = [
  {
    name: "Sarah Al-Mansoori",
    role: "Traveled to Tokyo, Japan",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    quote:
      "Where we Travel made planning my trip to Japan so effortless. The AI budget planner kept everything organized — I knew exactly where every dollar was going, from flights to food. I've never felt more in control of a trip.",
    rating: 5,
  },
  {
    name: "Karim Chebbi",
    role: "Traveled to Santorini, Greece",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote:
      "I booked our entire honeymoon in under 20 minutes. The destination suggestions and hotel deals were spot on, and the budget breakdown saved us from overspending.",
    rating: 5,
  },
  {
    name: "Amira Trabelsi",
    role: "Traveled to Bali, Indonesia",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200&auto=format&fit=crop",
    quote:
      "As a solo traveler, safety and budgeting matter a lot to me. This platform's AI recommendations felt tailored to exactly what I needed.",
    rating: 5,
  },
];

export const stats = [
  { label: "Happy Travelers", value: "10K+" },
  { label: "Destinations", value: "150+" },
  { label: "Events & Festivals", value: "500+" },
  { label: "Satisfaction Rate", value: "98%" },
];

export const features = [
  { icon: "🎉", color: "#e8955f", title: "Events & Festivals Guide", desc: "Discover local events and festivals happening during your trip." },
  { icon: "🏷️", color: "#0f3d5c", title: "Best Flight & Hotel Deals", desc: "Compare and book the best flight and hotel offers available." },
  { icon: "💰", color: "#c9a35c", title: "Smart Budget Planner", desc: "Automatically allocate your trip budget across every category." },
  { icon: "🤖", color: "#6fa8bf", title: "AI-Powered Planning", desc: "Get personalized itineraries generated by intelligent algorithms." },
  { icon: "🎯", color: "#8a8fa3", title: "Made for Smart Travelers", desc: "Designed for independent travelers who plan every detail." },
];

export const interestOptions = [
  { value: "Beaches", icon: "🏖️" },
  { value: "Food", icon: "🍽️" },
  { value: "Hiking", icon: "🥾" },
  { value: "Museums", icon: "🏛️" },
  { value: "Nightlife", icon: "🌃" },
  { value: "Adventure", icon: "🧭" },
];
