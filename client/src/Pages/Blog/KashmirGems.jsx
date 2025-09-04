import { Helmet } from "react-helmet";
import { Gem, Star, Sparkles } from "lucide-react";

export default function KashmiriGems() {
    const gems = [
        {
            name: "Kashmiri Sapphire",
            img: "/Blog/KashmiriGems/sapphire.jpg",
            desc: "Known worldwide for its unique cornflower-blue color, Kashmiri Sapphire is one of the rarest and most precious gemstones.",
        },
        {
            name: "Emerald",
            img: "/Blog/KashmiriGems/emerald.jpg",
            desc: "Emeralds from Kashmir are admired for their deep green color and clarity, symbolizing rebirth and prosperity.",
        },
        {
            name: "Ruby",
            img: "/Blog/KashmiriGems/ruby.jpg",
            desc: "Called the 'King of Gems', Kashmiri rubies are rare and prized for their rich red hues and brilliance.",
        },
        {
            name: "Tourmaline",
            img: "/Blog/KashmiriGems/tourmaline.jpg",
            desc: "Tourmalines in Kashmir are found in multiple colors, believed to have healing energies and protective qualities.",
        },
    ];

    return (
        <div className="bg-white text-gray-800">
            {/* SEO */}
            <Helmet>
                <title>Kashmiri Gems Blog | Jewels of Kashmir</title>
                <meta
                    name="description"
                    content="Discover the rare and precious gemstones of Kashmir including Sapphire, Emerald, Ruby, and Tourmaline."
                />
                <meta
                    name="keywords"
                    content="Kashmiri Gems, Sapphire, Emerald, Ruby, Tourmaline, Precious Stones, Jewels of Kashmir"
                />
            </Helmet>

            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
                <img
                    src="/Blog/KashmiriGems/hero.jpg"
                    alt="Kashmiri Gems"
                    className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[3000ms] hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn">
                        Kashmiri Gems
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn delay-200">
                        Rare, timeless, and breathtakingly beautiful — explore the gems that
                        define Kashmir’s natural heritage.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-semibold mb-4">About Kashmiri Gems</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    Kashmir is not only known for its scenic landscapes but also for its{" "}
                    <strong>rare gemstones</strong>. The region’s rich geology has given
                    rise to some of the finest sapphires, emeralds, and rubies found
                    anywhere in the world. These gems are highly sought after by collectors
                    and jewelers for their rarity, purity, and unique shades.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    Among all, the <strong>Kashmiri Sapphire</strong> is considered the
                    most legendary, often referred to as “blue velvet on stone” due to its
                    deep cornflower-blue hue. Today, these gems are a symbol of Kashmir’s
                    timeless natural beauty.
                </p>
            </section>

            {/* Gems Grid */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {gems.map((gem, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={gem.img}
                                alt={gem.name}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <Gem className="w-8 h-8 text-indigo-600" />
                                <h3 className="text-xl font-semibold mt-3">{gem.name}</h3>
                                <p className="mt-2 text-gray-600">{gem.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Significance */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-semibold mb-6">Cultural Significance</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Gems have always held a special place in Kashmiri culture. They were
                    treasured by Mughal emperors, worn by Kashmiri royalty, and continue
                    to be admired by connoisseurs across the globe. Each gemstone is
                    believed to carry unique symbolism —{" "}
                    <strong>Sapphire</strong> for wisdom, <strong>Emerald</strong> for
                    prosperity, <strong>Ruby</strong> for passion, and{" "}
                    <strong>Tourmaline</strong> for protection.
                </p>
            </section>

            {/* Highlight Section */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-12">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <Sparkles className="mx-auto w-12 h-12 text-purple-600 mb-4" />
                    <h2 className="text-3xl font-semibold">Why Kashmiri Gems?</h2>
                    <p className="mt-4 text-lg text-gray-700">
                        Kashmiri gems are not just stones — they are treasures of nature,
                        admired for centuries for their rarity and charm. Owning one is like
                        owning a piece of paradise.
                    </p>
                </div>
            </section>
        </div>
    );
}
