import React, { useState } from "react";

const FeaturedTours = ({ onTourClick, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const tours = [
    {
      id: 1,
      name: "Tbilisi Old Town Walking Tour",
      description:
        "Explore the historic heart of Georgia's capital with our expert guide",
      price: 45,
      duration: "3 hours",
      rating: 4.8,
      reviews: 127,
      image: "/Tbilisi.jpg",
      category: "cultural",
      highlights: [
        "Historic churches",
        "Traditional architecture",
        "Local markets",
        "Wine tasting",
      ],
    },
    {
      id: 2,
      name: "Kazbegi Mountain Adventure",
      description:
        "Hike through stunning mountain landscapes and visit the iconic Gergeti Trinity Church",
      price: 89,
      duration: "Full day",
      rating: 4.9,
      reviews: 89,
      image: "/Gergeti.jpg",
      category: "adventure",
      highlights: [
        "Mountain hiking",
        "Alpine views",
        "Historic church",
        "Local cuisine",
      ],
    },
    {
      id: 3,
      name: "Kakheti Wine Region Tour",
      description:
        "Discover Georgia's famous wine culture with tastings at traditional wineries",
      price: 67,
      duration: "8 hours",
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "wine",
      highlights: [
        "Wine tastings",
        "Traditional methods",
        "Local food",
        "Scenic vineyards",
      ],
    },
    {
      id: 4,
      name: "Svaneti Valley Trek",
      description:
        "Multi-day trek through the remote and beautiful Svaneti region",
      price: 245,
      duration: "3 days",
      rating: 4.9,
      reviews: 67,
      image: "/Svaneti.jpg",
      category: "adventure",
      highlights: [
        "Remote villages",
        "Ancient towers",
        "Mountain passes",
        "Local hospitality",
      ],
    },
    {
      id: 5,
      name: "Batumi Coastal Experience",
      description:
        "Explore the Black Sea coast and modern architecture of Batumi",
      price: 78,
      duration: "6 hours",
      rating: 4.6,
      reviews: 94,
      image: "/Batumi.jpg",
      category: "cultural",
      highlights: [
        "Coastal views",
        "Modern architecture",
        "Botanical garden",
        "Seafood dining",
      ],
    },
    {
      id: 6,
      name: "Vardzia Cave City",
      description:
        "Visit the ancient cave monastery complex carved into the mountainside",
      price: 56,
      duration: "5 hours",
      rating: 4.8,
      reviews: 112,
      image: "/Vardzia.jpg",
      category: "cultural",
      highlights: [
        "Ancient caves",
        "Historic monastery",
        "Mountain views",
        "Cultural heritage",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Tours" },
    { id: "cultural", name: "Cultural" },
    { id: "adventure", name: "Adventure" },
    { id: "wine", name: "Wine Tours" },
  ];

  const filteredTours =
    selectedCategory === "all"
      ? tours
      : tours.filter((tour) => tour.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50" id="tours">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Tours & Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best of Georgia with our carefully curated tours
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 border-2 border-hipster-600 rounded-full cursor-pointer font-semibold transition-all duration-300 uppercase tracking-wider text-sm hover:-translate-y-0.5 ${
                selectedCategory === category.id
                  ? "bg-hipster-600 text-white -translate-y-0.5"
                  : "bg-transparent text-hipster-600 hover:bg-hipster-600 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-white text-gray-800 border-none py-4 px-8 rounded-full font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-hipster-600 hover:text-white hover:scale-105"
                    onClick={() => onTourClick(tour)}
                  >
                    View Details
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-4 py-2 rounded-2xl backdrop-blur-sm">
                  <span className="text-xs font-semibold text-hipster-600 uppercase tracking-wider">
                    {tour.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 flex-1 mr-4">
                    {tour.name}
                  </h3>
                  <div className="flex flex-col items-end">
                    <span className="text-yellow-400 text-base mb-1">
                      {"★".repeat(Math.floor(tour.rating))}
                    </span>
                    <span className="text-xs text-gray-600">
                      {tour.rating} ({tour.reviews} reviews)
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {tour.description}
                </p>

                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-base">⏱️</span>
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-base">📍</span>
                    <span>Georgia</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tour.highlights.slice(0, 3).map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-hipster-50 text-hipster-600 px-3 py-1 rounded-2xl text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-hipster-600">
                      ${tour.price}
                    </span>
                    <span className="text-xs text-gray-600">per person</span>
                  </div>
                  <button
                    className="bg-gradient-to-r from-hipster-600 to-forest-700 text-white border-none py-3 px-6 rounded-full font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider text-sm hover:-translate-y-0.5 hover:shadow-lg"
                    onClick={() => onAddToCart(tour)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
