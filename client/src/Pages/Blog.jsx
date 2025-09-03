import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "Experience the Magic of Nigeen Lake",
            excerpt:
                "Why Nigeen Lake is called the ‘Jewel in the Ring of Kashmir’ and how to make the most of your stay here.",
            image: "Blog/hero_child.webp",
            category: "Destinations",
            link: "/blog/nigeen-lake",
        },
        {
            id: 2,
            title: "Top 5 Things to Do in a Houseboat Stay",
            excerpt:
                "From sipping Kahwa at sunrise to stargazing at night, here’s how to create memories on a houseboat.",
            image: "Blog/5things.webp",
            category: "Experiences",
            link: "/blog/houseboat-stay",
        },
        {
            id: 3,
            title: "Kashmiri Cuisine: A Food Lover’s Guide",
            excerpt:
                "Explore Rogan Josh, Gushtaba, and the world-famous Wazwan – a feast for the senses.",
            image: "Blog/Cuisine.webp",
            category: "Food & Culture",
            link: "/blog/kashmiri-food",
        },
        {
            id: 4,
            title: "A Journey Through Gulmarg",
            excerpt:
                "Discover why Gulmarg is a year-round paradise for skiers and trekkers alike.",
            image: "Blog/Gulmarg.webp",
            category: "Destinations",
            link: "/blog/gulmarg",
        },
        {
            id: 5,
            title: "Hidden Gems of Srinagar",
            excerpt:
                "Uncover offbeat experiences and lesser-known attractions in Srinagar.",
            image: "Blog/Hidden_gem.webp",
            category: "Travel Tips",
            link: "/blog/srinagar-gems",
        },
        {
            id: 6,
            title: "The Enchanting Gardens of Kashmir",
            excerpt:
                "Walk through Shalimar, Nishat, and Chashme Shahi — Mughal-era gardens that tell timeless stories.",
            image: "Blog/Garden.webp",
            category: "Culture",
            link: "/blog/kashmir-gardens",
        },
    ];

    const swiperRef = useRef(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50">
            {/* Hero Section */}
            <section
                className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: "url('Blog/hero.webp')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-white max-w-2xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug"
                    >
                        Kashmir Travel Journal
                    </motion.h1>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                        Stories, guides, and hidden gems from the paradise on earth 🌿
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Column - Posts */}
                <div className="lg:col-span-3">
                    {/* Featured Post */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="relative rounded-2xl overflow-hidden shadow-lg mb-8 sm:mb-12"
                    >
                        <img
                            src={posts[0].image}
                            alt={posts[0].title}
                            className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white max-w-lg px-2">
                            <span className="bg-emerald-600 text-xs sm:text-sm px-3 py-1 rounded-full">
                                {posts[0].category}
                            </span>
                            <h2 className="text-lg sm:text-xl md:text-3xl font-bold mt-2 sm:mt-3">
                                {posts[0].title}
                            </h2>
                            <p className="text-gray-200 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
                                {posts[0].excerpt}
                            </p>
                            <Link
                                to={posts[0].link}
                                className="inline-flex items-center mt-2 sm:mt-3 text-amber-400 font-semibold hover:underline text-xs sm:text-sm md:text-base"
                            >
                                Read More <ArrowRight className="ml-1 sm:ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Blog Slider */}
                    <div>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={16}
                            loop={true}
                            grabCursor={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            speed={700}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                            }}
                        >
                            {posts.slice(1).map((post) => (
                                <SwiperSlide key={post.id}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                                    >
                                        <div className="h-40 sm:h-48 md:h-52 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-5 flex-1 flex flex-col">
                                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full self-start">
                                                {post.category}
                                            </span>
                                            <h3 className="text-base sm:text-lg font-bold mt-2 text-gray-800 hover:text-emerald-700 transition">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 mt-2 text-xs sm:text-sm flex-1">
                                                {post.excerpt}
                                            </p>
                                            <Link
                                                to={post.link}
                                                className="mt-3 text-emerald-700 font-semibold hover:underline flex items-center text-xs sm:text-sm md:text-base"
                                            >
                                                Read More <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Pagination */}
                        <div className="flex justify-center mt-6 sm:mt-8 gap-3 flex-wrap">
                            <button
                                onClick={() => swiperRef.current?.slideTo(0)}
                                className="px-3 sm:px-4 py-2 bg-white shadow rounded-lg hover:bg-emerald-50 text-sm"
                            >
                                1
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideTo(1)}
                                className="px-3 sm:px-4 py-2 bg-white shadow rounded-lg hover:bg-emerald-50 text-sm"
                            >
                                2
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="px-3 sm:px-4 py-2 bg-white shadow rounded-lg hover:bg-emerald-50 text-sm"
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6 sm:space-y-8">
                    {/* Categories */}
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
                        <h4 className="font-bold text-gray-800 mb-3 sm:mb-4">
                            Categories
                        </h4>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-emerald-700">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-emerald-700">
                                    Food & Culture
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-emerald-700">
                                    Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-emerald-700">
                                    Travel Tips
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
                        <h4 className="font-bold text-gray-800 mb-3 sm:mb-4">
                            Recent Posts
                        </h4>
                        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                            {posts.map((p) => (
                                <li key={p.id}>
                                    <Link
                                        to={p.link}
                                        className="text-gray-700 hover:text-emerald-700"
                                    >
                                        {p.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-emerald-600 p-4 sm:p-6 rounded-2xl shadow-md text-white">
                        <h4 className="font-bold mb-2">Stay Inspired 🌸</h4>
                        <p className="text-xs sm:text-sm mb-3">
                            Get travel tips, guides, and special offers delivered to your
                            inbox.
                        </p>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2 rounded-lg text-gray-800 text-sm"
                        />
                        <button className="mt-3 w-full bg-amber-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-amber-300 text-sm">
                            Subscribe
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
