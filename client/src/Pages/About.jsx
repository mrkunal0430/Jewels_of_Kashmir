import { motion } from "framer-motion";
import { Mountain, Ship, Heart, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

export default function About() {
    const [open, setOpen] = useState(false);

    const photos = [
        { src: "HouseBoats/Nageen_Suite/1.jpg", title: "Golden Sunrise on Nigeen Lake" },
        { src: "HouseBoats/Nageen_Suite/2.jpg", title: "Shikara Ride Experience" },
        { src: "HouseBoats/Nageen_Suite/3.jpg", title: "Traditional Kashmiri Interiors" },
        { src: "HouseBoats/Nageen_Suite/4.jpg", title: "Evening Tea by the Lake" },
        { src: "HouseBoats/Nageen_Suite/5.jpg", title: "Night View of Houseboats" },
        { src: "HouseBoats/Nageen_Suite/6.jpg", title: "Local Kashmiri Cuisine" },
        { src: "HouseBoats/Nageen_Suite/7.jpg", title: "Peaceful Morning View" },
        { src: "HouseBoats/Nageen_Suite/8.jpg", title: "Traditional Wooden Artwork" },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center text-center">
                <img
                    src="About/Hero.jpg"
                    alt="Jewels of Kashmir"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <motion.div
                    className="relative z-10 px-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
                        About Jewels of Kashmir
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-white max-w-3xl mx-auto">
                        More than a stay — it’s an experience of culture, comfort, and
                        Kashmir’s timeless charm.
                    </p>
                </motion.div>
            </section>

            {/* Story Section */}
            <section className="px-6 py-16 max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-gray-800"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Our Story
                </motion.h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Jewels of Kashmir is more than just a houseboat or homestay service —
                    it’s a gateway into the heart of Kashmir. Nestled on the serene waters
                    of Nigeen Lake, we offer travelers a perfect blend of tradition and
                    modern hospitality. From warm Kashmiri food to cultural experiences,
                    we ensure every guest takes back memories, not just photographs.
                </p>
            </section>

            {/* Highlights */}
            <section className="px-6 py-16 bg-gradient-to-br from-yellow-50 to-white grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white rounded-2xl shadow-lg"
                >
                    <Heart className="w-12 h-12 text-yellow-500 mx-auto" />
                    <h3 className="mt-4 font-semibold text-lg">Hospitality</h3>
                    <p className="text-gray-600 text-sm">Warmth like family</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white rounded-2xl shadow-lg"
                >
                    <Mountain className="w-12 h-12 text-yellow-500 mx-auto" />
                    <h3 className="mt-4 font-semibold text-lg">Scenic Beauty</h3>
                    <p className="text-gray-600 text-sm">Surrounded by nature</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white rounded-2xl shadow-lg"
                >
                    <Ship className="w-12 h-12 text-yellow-500 mx-auto" />
                    <h3 className="mt-4 font-semibold text-lg">Houseboat Stays</h3>
                    <p className="text-gray-600 text-sm">Unique floating homes</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white rounded-2xl shadow-lg"
                >
                    <Sparkles className="w-12 h-12 text-yellow-500 mx-auto" />
                    <h3 className="mt-4 font-semibold text-lg">Authentic Culture</h3>
                    <p className="text-gray-600 text-sm">Food, crafts & traditions</p>
                </motion.div>
            </section>


            {/* Timeline / Journey */}
            <section className="px-6 py-16 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Our Journey
                </h2>
                <div className="mt-12 space-y-12">
                    {[
                        {
                            year: "2010",
                            text: "Started with a vision to showcase Kashmir’s heritage through stays on Nigeen Lake.",
                        },
                        {
                            year: "2015",
                            text: "Expanded into curated tours and cultural experiences for our guests.",
                        },
                        {
                            year: "2020",
                            text: "Upgraded facilities to blend luxury with tradition while keeping sustainability in focus.",
                        },
                        {
                            year: "Now",
                            text: "Recognized as one of the most trusted and unique homestay providers in Kashmir.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row items-center gap-6"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-yellow-400 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg">
                                {item.year}
                            </div>
                            <p className="text-gray-700 text-lg max-w-3xl">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* Gallery Preview Section */}
            <section className="w-full max-w-5xl mx-auto py-12 px-4 md:px-6 text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    📸 Jewels of Kashmir Memories
                </motion.h2>

                {/* ✅ Thumbnail preview grid (like phone gallery preview) */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 rounded-2xl overflow-hidden shadow-lg">
                    {photos.slice(0, 6).map((photo, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative cursor-pointer overflow-hidden"
                            onClick={() => setOpen(true)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-40 object-cover"
                            />
                            {/* Dark overlay + count on last image */}
                            {i === 5 && photos.length > 6 && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-lg font-semibold">
                                    +{photos.length - 6} More
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* ✅ Fullscreen lightbox (real phone gallery experience) */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={photos}
                    plugins={[Fullscreen, Slideshow, Zoom, Thumbnails]}
                    animation={{ swipe: 500, fade: 300 }}
                />
            </section>





            {/* Closing CTA */}
            <section className="px-6 py-16 bg-yellow-400 text-center text-gray-900">
                <Star className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-3xl font-bold">Be Part of Our Story</h2>
                <p className="mt-2 text-lg">
                    Join us in celebrating Kashmir’s beauty, culture, and hospitality.
                </p>
            </section>
        </div>
    );
}
