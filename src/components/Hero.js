import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center relative mt-20"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/Ushguli_M.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      id="home"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(61, 155, 99, 0.3) 0%, rgba(47, 122, 79, 0.3) 100%)",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="hero-text">
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeInUp"
            style={{ animation: "fadeInUp 1s ease-out" }}
          >
            Discover Georgia's Hidden Treasures
          </h1>
          <p
            className="text-xl text-white text-opacity-90 mb-8 leading-relaxed animate-fadeInUp"
            style={{ animation: "fadeInUp 1s ease-out 0.2s both" }}
          >
            Experience breathtaking landscapes, rich culture, and unforgettable
            adventures with our expert-guided tours
          </p>
          <div
            className="flex gap-8 mb-8 animate-fadeInUp"
            style={{ animation: "fadeInUp 1s ease-out 0.4s both" }}
          >
            <div className="text-center">
              <span className="block text-3xl font-bold text-hipster-200 mb-2">
                500+
              </span>
              <span className="text-sm text-white text-opacity-80 uppercase tracking-wider">
                Happy Travelers
              </span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-hipster-200 mb-2">
                50+
              </span>
              <span className="text-sm text-white text-opacity-80 uppercase tracking-wider">
                Unique Tours
              </span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-hipster-200 mb-2">
                5★
              </span>
              <span className="text-sm text-white text-opacity-80 uppercase tracking-wider">
                Average Rating
              </span>
            </div>
          </div>
          <div
            className="flex gap-4 animate-fadeInUp"
            style={{ animation: "fadeInUp 1s ease-out 0.6s both" }}
          >
            <button className="px-8 py-4 border-none rounded-full text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider bg-gradient-to-r from-hipster-300 to-hipster-400 text-white hover:-translate-y-1 hover:shadow-lg">
              Explore Tours
            </button>
            <button className="px-8 py-4 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-800 hover:-translate-y-1">
              Watch Video
            </button>
          </div>
        </div>

        <div
          className="flex justify-center items-center animate-fadeInRight"
          style={{ animation: "fadeInRight 1s ease-out 0.8s both" }}
        >
          <div
            className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm animate-float"
            style={{
              animation: "float 6s ease-in-out infinite",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
              <span className="text-3xl">🗺️</span>
              <span className="text-xl font-semibold text-gray-800">
                Popular Destinations
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-800">
                  Tbilisi Old Town
                </span>
                <span className="font-semibold text-hipster-600">From $45</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-800">
                  Kazbegi Mountains
                </span>
                <span className="font-semibold text-hipster-600">From $89</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-800">
                  Wine Region Tour
                </span>
                <span className="font-semibold text-hipster-600">From $67</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
