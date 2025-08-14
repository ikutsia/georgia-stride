import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-text">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About Georgia Stride
            </h2>
            <p className="text-xl text-hipster-600 font-semibold mb-8">
              Your Gateway to Authentic Georgian Experiences
            </p>

            <div className="mb-12">
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Founded in 2018, Georgia Stride has been connecting travelers
                with the authentic beauty and rich culture of Georgia. We
                believe that the best way to experience a country is through the
                eyes of locals who know its hidden gems and fascinating stories.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Our team of passionate guides and travel experts are dedicated
                to creating unforgettable experiences that go beyond typical
                tourist attractions. From the cobblestone streets of Tbilisi's
                Old Town to the majestic peaks of the Caucasus Mountains, we'll
                show you the real Georgia.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-start gap-4 mb-8">
                <div className="text-3xl flex-shrink-0 mt-1">🌟</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Expert Local Guides
                  </h4>
                  <p className="text-gray-600 leading-relaxed m-0">
                    Certified guides with deep knowledge of Georgian history,
                    culture, and traditions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="text-3xl flex-shrink-0 mt-1">🏔️</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Unique Experiences
                  </h4>
                  <p className="text-gray-600 leading-relaxed m-0">
                    Handpicked destinations and activities that showcase the
                    best of Georgia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="text-3xl flex-shrink-0 mt-1">🤝</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Personalized Service
                  </h4>
                  <p className="text-gray-600 leading-relaxed m-0">
                    Customized tours tailored to your interests, pace, and
                    travel style
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="text-3xl flex-shrink-0 mt-1">💎</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Quality Guaranteed
                  </h4>
                  <p className="text-gray-600 leading-relaxed m-0">
                    Premium accommodations, transportation, and experiences for
                    every tour
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-2xl transition-transform duration-300 hover:-translate-y-1">
                <span className="block text-3xl font-bold text-hipster-600 mb-2">
                  5+
                </span>
                <span className="text-sm text-gray-600 uppercase tracking-wider">
                  Years of Experience
                </span>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl transition-transform duration-300 hover:-translate-y-1">
                <span className="block text-3xl font-bold text-hipster-600 mb-2">
                  1000+
                </span>
                <span className="text-sm text-gray-600 uppercase tracking-wider">
                  Happy Travelers
                </span>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl transition-transform duration-300 hover:-translate-y-1">
                <span className="block text-3xl font-bold text-hipster-600 mb-2">
                  50+
                </span>
                <span className="text-sm text-gray-600 uppercase tracking-wider">
                  Unique Destinations
                </span>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl transition-transform duration-300 hover:-translate-y-1">
                <span className="block text-3xl font-bold text-hipster-600 mb-2">
                  4.9★
                </span>
                <span className="text-sm text-gray-600 uppercase tracking-wider">
                  Average Rating
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-md">
              <div className="col-span-2 row-span-1">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Georgian landscape"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Mountain view"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Wine region"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
