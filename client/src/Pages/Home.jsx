import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import TestimonialData from "../Data/Testimonial.json";
import TestimonialSlider from "../components/TestimonialSlider";

const Home = () => {
    return (
        <div className="bg-[#fdfcf7] text-gray-900 overflow-hidden">
            {/* 🔑 SEO + Meta */}
            <Helmet>
                <title>Houseboat Stay | Jewels of Kashmir</title>
                <meta
                    name="description"
                    content="Discover the Jewels of Kashmir – Nigeen Lake, Mughal Gardens, Kashmiri Gems, authentic cuisine, and houseboat stays. A complete travel and culture guide to Kashmir."
                />
                <meta
                    name="keywords"
                    content="Jewels of Kashmir, Houseboat Stay, Kashmir tourism, Nigeen Lake, Mughal Gardens, Kashmiri gems, Kashmiri cuisine, Kashmir houseboats, Explore Kashmir"
                />

                {/* 📱 Open Graph */}
                <meta
                    property="og:title"
                    content="Jewels of Kashmir | Explore Lakes, Houseboats Stays & Culture"
                />
                <meta
                    property="og:description"
                    content="Explore Kashmir’s natural beauty and heritage – lakes, gardens, gems, houseboats, and cuisine."
                />
                <meta
                    property="og:image"
                    content="https://www.jewelofkashmir.in/Home/Og-Home.webp"
                />
                <meta property="og:url" content="https://www.jewelofkashmir.in/" />
                <meta property="og:type" content="website" />

                {/* 🐦 Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Jewels of Kashmir | Explore Culture & Beauty of Houseboats Stay"
                />
                <meta
                    name="twitter:description"
                    content="Jewels of Kashmir – Your Houseboat Stay"
                />
                <meta
                    name="twitter:image"
                    content="https://www.jewelofkashmir.in/Home/Og-Home.webp"
                />

                {/* ✅ Canonical */}
                <link rel="canonical" href="https://www.jewelofkashmir.in/" />

                {/* 📊 Schema */}
                <script type="application/ld+json">
                    {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.jewelofkashmir.in/",
            "name": "Jewels of Kashmir",
            "description": "A complete guide to the Jewels of Kashmir – Lakes, Gardens, Gems, Cuisine, and Culture.",
            "publisher": {
              "@type": "Organization",
              "name": "Jewels of Kashmir",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.jewelofkashmir.in/Home/Og-Home.webp"
              }
            }
          }
          `}
                </script>

                <script type="application/ld+json">
                    {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jewels of Kashmir",
            "image": "https://www.jewelofkashmir.in/Home/Og-Home.webp",
            "@id": "",
            "url": "https://www.jewelofkashmir.in/",
            "telephone": "+91 9906607462",
            "priceRange": "₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nigeen Lake",
              "addressLocality": "Srinagar",
              "postalCode": "190006",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 34.1166,
              "longitude": 74.8224
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }, 
            "sameAs": [
              "https://www.facebook.com/jewelofkashmirhouseboat/",
              "https://www.instagram.com/jewel_kashmir_houseboat/"
            ] 
          }
          `}
                </script>
            </Helmet>

            {/* 🎥 Hero Section */}
            <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[calc(100vh-64px)] overflow-hidden flex justify-center items-center text-center">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/Home/Home_Poster.webp"
                    width={1920}
                    height={1080}
                    aria-hidden="true"
                    tabIndex={-1}
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                >
                    <source src="/Home/Home_Vedio.webm" type="video/webm" />
                    <source src="/Home/Home_Vedio.mp4" type="video/mp4" />
                </video>

                <motion.div
                    className="relative z-10 max-w-2xl px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-[#f5c934] drop-shadow-lg mb-10">
                        Feel the <span>Harmony</span>
                    </h1>

                    <div className="mt-10 flex justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-6 py-3 rounded-2xl bg-[#f5c934] text-gray-900 font-semibold hover:bg-yellow-400 transition"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/about"
                            className="px-6 py-3 rounded-2xl bg-white/80 text-gray-900 font-semibold hover:bg-white transition"
                        >
                            Explore
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* 🏡 About */}
            <section className="py-12 px-6 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">
                        Welcome to <span className="text-amber-500">Kashmir Houseboat</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-700">
                        The Jewels of Kashmir offer luxury houseboats in the serene waters
                        of Nigeen Lake. Blending Kashmiri tradition with modern comfort, we
                        provide an unforgettable experience surrounded by breathtaking
                        beauty.
                    </p>
                </div>
            </section>

            {/* ✨ Featured Houseboats */}
            <section className="py-12 bg-[#fdfcf7]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-[#0a2540]">
                        Our Houseboats
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                        {[
                            {
                                name: "Super Deluxe",
                                img: "HouseBoats/SuperDeluxe.webp",
                                path: "/super-deluxe",
                                desc: "Kashmiri charm with a king bed, plush seating & dressing room",
                            },
                            {
                                name: "Royal Suite",
                                img: "HouseBoats/RoyalSuite.webp",
                                path: "/ac-royal-suite",
                                desc: "Elegant suite with modern amenities & stunning lake views",
                            },
                            {
                                name: "Premium Lake View",
                                img: "HouseBoats/PremiumLake.webp",
                                path: "/premium-lake",
                                desc: "Spacious room with panoramic views of Nigeen Lake",
                            },
                            {
                                name: "Nigeen Suite",
                                img: "HouseBoats/NageenLake.webp",
                                path: "/nageen-lake",
                                desc: "Cozy suite with traditional decor & private balcony",
                            },
                        ].map((boat, idx) => (
                            <div
                                key={idx}
                                className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
                            >
                                {/* Image */}
                                <div className="relative group">
                                    <img
                                        src={boat.img}
                                        alt={`Image of ${boat.name} houseboat`}
                                        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        width={400}
                                        height={224}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <p className="text-white text-lg font-semibold">
                                            Luxury Awaits
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {boat.name}
                                    </h3>
                                    <p className="text-gray-600">{boat.desc}</p>
                                    <Link
                                        to={boat.path}
                                        className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🌟 Why Choose Us */}
            <section className="py-16 bg-[#0a2540] text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                        {[
                            { icon: "🛶", text: "Traditional Kashmiri Experience" },
                            { icon: "⭐", text: "Luxury Comfort & Service" },
                            { icon: "🌅", text: "Stunning Lake Views" },
                            { icon: "🍽", text: "Authentic Kashmiri Cuisine" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white/10 rounded-xl p-6 shadow-md hover:bg-white/20 transition"
                            >
                                <div className="text-4xl">{item.icon}</div>
                                <p className="mt-3">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 📝 Testimonials */}
            <section className="py-12 px-3">
                <TestimonialSlider TestimonialData={TestimonialData} />
            </section>

            {/* 📞 CTA */}
            <section className="relative p-6 bg-[#0a2540] text-center text-white">
                <h1
                    className="text-3xl md:text-4xl font-bold"
                >
                    Ready to Experience the Jewels of Kashmir?
                </h1>
                <Link
                    to="/contact"
                    className="inline-block mt-8 px-8 py-4 bg-[#f5c934] text-gray-900 font-semibold rounded-2xl hover:bg-yellow-400 transition"
                >
                    Contact Us
                </Link>
            </section>
        </div>
    );
};

export default Home;
