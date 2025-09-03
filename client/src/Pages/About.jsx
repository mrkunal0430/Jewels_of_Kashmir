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
        { src: "HouseBoats/Nageen_Suite/1.webp", title: "Golden Sunrise on Nigeen Lake" },
        { src: "HouseBoats/Nageen_Suite/2.webp", title: "Shikara Ride Experience" },
        { src: "HouseBoats/Nageen_Suite/3.webp", title: "Traditional Kashmiri Interiors" },
        { src: "HouseBoats/Nageen_Suite/4.webp", title: "Evening Tea by the Lake" },
        { src: "HouseBoats/Nageen_Suite/5.webp", title: "Night View of Houseboats" },
        { src: "HouseBoats/Nageen_Suite/6.webp", title: "Local Kashmiri Cuisine" },
        { src: "HouseBoats/Nageen_Suite/7.webp", title: "Peaceful Morning View" },
        { src: "HouseBoats/Nageen_Suite/8.webp", title: "Traditional Wooden Artwork" },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative overflow-hidden w-full h-[200px] sm:h-[400px] md:h-[470px] lg:h-[calc(100vh-64px)] flex items-center justify-center text-center">
                <img
                    src="About/Hero.webp"
                    alt="Jewels of Kashmir"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50" />
                <motion.div
                    className="relative z-10 px-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className=" sm:text-2xl md:text-7xl font-bold text-yellow-400">
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
                    An enthusiastic family of locals who are determined to add charm to the Kashmir tour with
                    a comfortable houseboat stay for every traveller.
                    The legacy of these ancient houseboats is <strong>passed on to 5 generations.</strong>
                    With decades into the hospitality business, <strong>this enterprise inherits its cultural leverage via
                        Mr Mohammad Wangnoo and his Sons.</strong>
                    In the early nineteenth century, the Wangnoo household had been forerunners in
                    developing this new phenomenon and constructed their own boats.
                    To date, we dedicate our utmost efforts to give the most valuable service to our customers.
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
                            year: "Early 19th Century",
                            text: "The Wangnoo family pioneered the tradition of houseboats in Kashmir, crafting vessels that carried the elegance and charm of Kashmiri heritage.",
                        },
                        {
                            year: "Generations of Legacy",
                            text: "For five generations, our family has preserved and nurtured this legacy, blending culture, hospitality, and the art of hosting into every experience.",
                        },
                        {
                            year: "Hospitality Roots",
                            text: "With decades in the hospitality business, guided by Mr. Mohammad Wangnoo and his sons, we have built a name that represents trust, warmth, and cultural richness.",
                        },
                        {
                            year: "Moving Forward",
                            text: "Jewels of Kashmir stands as one of the most unique and reliable homestay providers in the valley — offering houseboat stays, Shikara rides, and curated experiences that let every traveler feel the true spirit of Kashmir.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row items-center gap-6"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-60 bg-yellow-400 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg">
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
