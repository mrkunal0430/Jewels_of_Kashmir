import { Helmet } from "react-helmet";
import { Ship, Coffee, Camera, Utensils, Star } from "lucide-react";

export default function HouseboatThings() {
    const activities = [
        {
            icon: <Ship className="w-8 h-8 text-blue-600" />,
            title: "Enjoy a Shikara Ride",
            desc: "Glide across Dal Lake or Nigeen Lake in a traditional Shikara. Early mornings and sunsets offer magical views of floating gardens and local life.",
            img: "/Blog/Houseboat/shikara.jpg",
        },
        {
            icon: <Coffee className="w-8 h-8 text-yellow-600" />,
            title: "Sip Kashmiri Kahwa on the Deck",
            desc: "Relax on your houseboat balcony with a hot cup of saffron-infused Kahwa while soaking in serene lake views.",
            img: "/Blog/Houseboat/kahwa.jpg",
        },
        {
            icon: <Camera className="w-8 h-8 text-purple-600" />,
            title: "Capture the Sunrise & Sunset",
            desc: "The golden hues of sunrise and sunset reflecting on the calm waters make for unforgettable photography moments.",
            img: "/Blog/Houseboat/sunset.jpg",
        },
        {
            icon: <Utensils className="w-8 h-8 text-red-600" />,
            title: "Relish Authentic Kashmiri Cuisine",
            desc: "Feast on Rogan Josh, Yakhni, Gushtaba, and other delicacies — a true Kashmiri Wazwan experience on the water.",
            img: "/Blog/Houseboat/food.jpg",
        },
        {
            icon: <Star className="w-8 h-8 text-indigo-600" />,
            title: "Stargaze from the Balcony",
            desc: "At night, step onto the deck and witness a starlit Kashmiri sky with cool breezes and the lake’s calm reflection.",
            img: "/Blog/Houseboat/stars.jpg",
        },
    ];

    return (
        <div className="bg-white text-gray-800">
            {/* SEO */}
            <Helmet>
                <title>5 Things to Do on a Houseboat | Jewels of Kashmir</title>
                <meta
                    name="description"
                    content="Discover the top 5 things to do while staying on a Kashmiri houseboat — from Shikara rides to Kashmiri cuisine and stargazing."
                />
                <meta
                    name="keywords"
                    content="Houseboat Kashmir, Shikara ride, Kashmiri Kahwa, Dal Lake, Nigeen Lake, Houseboat experience"
                />
            </Helmet>

            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
                <img
                    src="/Blog/Houseboat/hero.jpg"
                    alt="Houseboat Experience Kashmir"
                    className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[3000ms] hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn">
                        5 Things to Do on a Houseboat
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn delay-200">
                        Experience the magic of Kashmiri houseboats with these unforgettable
                        activities.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-6xl mx-auto px-6 py-12 text-center">
                <p className="text-lg leading-relaxed text-gray-700">
                    A stay on a Kashmiri houseboat is more than just accommodation — it’s
                    a lifestyle. From sipping Kahwa at sunrise to stargazing at night,
                    here are the top <strong>5 things you must do</strong> during your
                    stay on Dal Lake or Nigeen Lake.
                </p>
            </section>

            {/* Activities */}
            <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
                {activities.map((item, i) => (
                    <div
                        key={i}
                        className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
                        />
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <h2 className="text-2xl font-semibold">{item.title}</h2>
                            </div>
                            <p className="mt-3 text-lg text-gray-700">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Outro */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-4">
                        A Houseboat Stay is an Experience of a Lifetime
                    </h2>
                    <p className="text-lg text-gray-700">
                        Whether it’s sipping tea on the balcony, riding a Shikara through
                        floating markets, or simply watching the stars, a houseboat stay in
                        Kashmir will leave you with memories that last forever.
                    </p>
                </div>
            </section>
        </div>
    );
}
