import { Helmet } from "react-helmet";
import { Camera, Trees, Flower2 } from "lucide-react";

export default function KashmirGarden() {
    return (
        <div className="bg-white text-gray-800">
            {/* SEO */}
            <Helmet>
                <title>Kashmir Gardens Blog | Jewels of Kashmir</title>
                <meta
                    name="description"
                    content="Explore the Mughal Gardens of Kashmir including Shalimar Bagh, Nishat Bagh, and Chashme Shahi. A paradise of flowers, fountains, and history."
                />
                <meta
                    name="keywords"
                    content="Kashmir Gardens, Shalimar Bagh, Nishat Bagh, Chashme Shahi, Mughal Gardens, Srinagar Travel, Kashmir Blog"
                />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
                <img
                    src="/Blog/Garden/Hero.jpg"
                    alt="Kashmir Gardens"
                    className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[3000ms] hover:scale-110"
                />

                <div className="relative z-10  px-4">
                    <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn">
                        Kashmir Gardens
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn delay-200">
                        Where history, nature, and artistry come together in the heart of
                        Srinagar.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-semibold mb-4">About the Gardens</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    The gardens of Kashmir are a testament to the grandeur of the Mughal
                    era. Designed with intricate layouts, flowing fountains, and lush
                    flowerbeds, they reflect the Persian influence on Mughal architecture.
                    Each garden is built with terraced lawns, chinar trees, and water
                    channels that flow directly from the Himalayan springs.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    The most famous among them are <strong>Shalimar Bagh</strong>,{" "}
                    <strong>Nishat Bagh</strong>, and <strong>Chashme Shahi</strong>. These
                    gardens, located along the banks of Dal Lake, are not just tourist
                    spots but living pieces of history that narrate the lifestyle of
                    Mughal emperors and their love for nature.
                </p>
            </section>

            {/* Highlights Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Flower2 className="w-8 h-8 text-pink-600" />,
                            title: "Blooming Flowers",
                            desc: "From tulips to roses, the gardens are home to thousands of colorful blossoms in spring and summer.",
                        },
                        {
                            icon: <Trees className="w-8 h-8 text-green-600" />,
                            title: "Chinar Trees",
                            desc: "The centuries-old Chinar trees provide shade and enhance the scenic beauty of the gardens.",
                        },
                        {
                            icon: <Camera className="w-8 h-8 text-blue-600" />,
                            title: "Perfect Photography Spot",
                            desc: "With mountains in the backdrop and fountains in the front, it's a photographer’s paradise.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow p-6 transform transition duration-500 hover:scale-105 hover:shadow-lg"
                        >
                            {item.icon}
                            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                            <p className="mt-2 text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed Info */}
            <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Shalimar Bagh</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Built by Emperor Jahangir for his wife Noor Jahan, Shalimar Bagh is
                        the crown jewel of Mughal gardens. Its four terraces, cascading
                        fountains, and elegant pavilions make it a symbol of love and
                        beauty.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold mb-4">Nishat Bagh</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Known as the “Garden of Bliss,” Nishat Bagh offers panoramic views
                        of Dal Lake and the Zabarwan Mountains. It was built by Asif Khan,
                        the brother of Noor Jahan, and is famous for its 12 terraces.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold mb-4">Chashme Shahi</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A smaller yet enchanting garden, Chashme Shahi is known for its
                        natural spring, believed to have healing properties. It was built by
                        Shah Jahan in 1632 AD and still attracts visitors for its fresh
                        water and serene environment.
                    </p>
                </div>
            </section>

            {/* Travel Info */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Best Time to Visit</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The best time to visit Kashmir gardens is during{" "}
                            <strong>April to October</strong>. Spring brings tulips, summer
                            brings lush greenery, and autumn paints the chinar leaves in shades
                            of gold and red.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">How to Reach</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The gardens are located around Dal Lake in Srinagar, just{" "}
                            <strong>10-12 km from Srinagar Airport</strong>. You can easily
                            reach them by taxi, auto-rickshaw, or even enjoy a Shikara ride
                            along the lake.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* Tailwind Animations (add to globals.css if not present) */
