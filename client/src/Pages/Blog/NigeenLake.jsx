import { motion } from "framer-motion";
import { MapPin, Ship, Trees, Camera, Star } from "lucide-react";
import { Helmet } from "react-helmet";

export default function NigeenLake() {
    return (
        <div className="bg-white text-gray-800">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Nigeen Lake Blog | Jewels of Kashmir</title>
                <meta
                    name="description"
                    content="Discover the beauty of Nigeen Lake in Srinagar, a serene destination known for its houseboats, shikara rides, and peaceful surroundings."
                />
                <meta
                    name="keywords"
                    content="Nigeen Lake, Srinagar, Kashmir, Jewels of Kashmir, Houseboats, Shikara Ride, Dal Lake, Travel Blog"
                />
            </Helmet>

            {/* Hero Section */}
            <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[calc(100vh-64px)] flex justify-center items-center text-center">
                <img
                    src="/Blog/NageenLake.webp"
                    alt="Nigeen Lake Kashmir"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-white px-4"
                >
                    <h1 className="text-amber-400 text-4xl md:text-6xl font-bold">Nigeen Lake</h1>
                    <p className="mt-4 font-bold text-lg md:text-xl max-w-2xl mx-auto">
                        A tranquil paradise in Srinagar, often called the "Jewel in the
                        Ring" of Kashmir.
                    </p>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">About Nigeen Lake</h2>
                    <p className="text-lg leading-relaxed">
                        Nigeen Lake, located in the western part of Srinagar, is one of the
                        most serene lakes in Kashmir. Known for its crystal-clear waters and
                        breathtaking views of the surrounding mountains, it is often
                        considered an extension of Dal Lake but offers a much quieter and
                        peaceful experience.
                    </p>
                </motion.div>

                {/* Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {[
                        {
                            icon: <Ship className="w-8 h-8 text-blue-600" />,
                            title: "Shikara Rides",
                            desc: "Experience the calm waters of Nigeen Lake with a traditional Shikara ride.",
                        },
                        {
                            icon: <Trees className="w-8 h-8 text-green-600" />,
                            title: "Peaceful Surroundings",
                            desc: "Unlike Dal Lake, Nigeen Lake is less crowded, making it ideal for relaxation.",
                        },
                        {
                            icon: <Camera className="w-8 h-8 text-purple-600" />,
                            title: "Scenic Views",
                            desc: "Perfect spot for photography with views of Zabarwan mountains and houseboats.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg"
                        >
                            <div>{item.icon}</div>
                            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                            <p className="mt-2 text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Travel Info */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Best Time to Visit</h2>
                        <p className="text-lg leading-relaxed">
                            The best time to visit Nigeen Lake is between{" "}
                            <strong>April and October</strong>. Summers are pleasant, and
                            spring adds vibrant colors with blooming flowers. Winters are
                            magical but quite cold, with snow-capped mountains in the
                            background.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">How to Reach</h2>
                        <p className="text-lg leading-relaxed">
                            Nigeen Lake is located around 6 km from the center of Srinagar.
                            You can hire a taxi, auto-rickshaw, or even take a Shikara ride
                            from Dal Lake to reach here. The Srinagar Airport is just 20 km
                            away.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reviews / Experiences */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-semibold mb-6">Traveler Experiences</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        "A peaceful escape from the crowds of Dal Lake.",
                        "The Shikara ride during sunset was unforgettable!",
                        "Staying in a houseboat on Nigeen Lake was a dream come true.",
                    ].map((review, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white border rounded-xl shadow p-6"
                        >
                            <Star className="text-yellow-500 w-6 h-6 mb-3" />
                            <p className="italic">“{review}”</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
