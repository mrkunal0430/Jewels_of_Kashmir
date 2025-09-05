import { Helmet } from "react-helmet";
import { Utensils, Coffee, FlameKindling, Leaf, Soup } from "lucide-react";

export default function KashmirCuisine() {
    const cuisines = [
        {
            icon: <Utensils className="w-8 h-8 text-red-600" />,
            title: "Wazwan – The Royal Feast",
            desc: "Wazwan is the pride of Kashmiri cuisine, a grand multi-course meal that includes dishes like Rogan Josh, Gushtaba, Yakhni, and Tabak Maaz. Traditionally served at weddings, it represents Kashmiri hospitality at its finest.",
            img: "/Blog/KashmirCuisine/1.webp",
        },
        {
            icon: <Soup className="w-8 h-8 text-yellow-600" />,
            title: "Nadur Yakhni",
            desc: "A light and flavorful dish made with lotus stem cooked in a yogurt-based curry, spiced delicately to preserve its natural taste. It’s a healthy and comforting Kashmiri delicacy.",
            img: "/Blog/KashmirCuisine/2.webp",
        },
        {
            icon: <Coffee className="w-8 h-8 text-amber-600" />,
            title: "Kashmiri Kahwa",
            desc: "A saffron-infused green tea brewed with spices, almonds, and sometimes honey. This aromatic drink warms you up on cold days and is a must-try when visiting Kashmir.",
            img: "/Blog/KashmirCuisine/3.webp",
        },
        {
            icon: <FlameKindling className="w-8 h-8 text-orange-600" />,
            title: "Rista & Gushtaba",
            desc: "Rista is a spicy red curry with minced mutton balls, while Gushtaba is its milder, yogurt-based version. Both are iconic dishes of the Wazwan feast and hold cultural significance.",
            img: "/Blog/KashmirCuisine/4.webp",
        },
        {
            icon: <Leaf className="w-8 h-8 text-green-600" />,
            title: "Vegetarian Kashmiri Dishes",
            desc: "From Dum Aloo to Chaman (cottage cheese curry), Kashmiri vegetarian dishes are rich in flavor and aroma, making them equally popular among travelers.",
            img: "/Blog/KashmirCuisine/5.webp",
        },
    ];

    return (
        <div className="bg-white text-gray-800">
            {/* SEO */}
            <Helmet>
                <title>Kashmir Cuisine – A Taste of Tradition | Jewels of Kashmir</title>
                <meta
                    name="description"
                    content="Explore Kashmir's cuisine – from the royal Wazwan feast and Kahwa to vegetarian delicacies like Dum Aloo and Nadur Yakhni."
                />
                <meta
                    name="keywords"
                    content="Kashmir cuisine, Kashmiri Wazwan, Kahwa, Rogan Josh, Dum Aloo, Kashmiri food"
                />
            </Helmet>

            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
                <img
                    src="/Blog/KashmirCuisine/Hero.webp"
                    alt="Kashmiri Cuisine"
                    className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[3000ms] hover:scale-110"
                />

                <div className="relative z-10 text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn">
                        Kashmir Cuisine – A Taste of Tradition
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn delay-200">
                        Discover the flavors of Kashmir – from the royal Wazwan feast to
                        aromatic Kahwa and soulful vegetarian delicacies.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-6xl mx-auto px-6 py-12 text-center">
                <p className="text-lg leading-relaxed text-gray-700">
                    Kashmir is not only known for its breathtaking landscapes but also for
                    its <strong>rich culinary heritage</strong>. Deeply influenced by
                    Central Asian, Persian, and Indian flavors, Kashmiri food is a blend
                    of royal feasts and soulful comfort meals. Here are the{" "}
                    <strong>top dishes</strong> that define Kashmir’s cuisine.
                </p>
            </section>

            {/* Cuisines */}
            <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
                {cuisines.map((item, i) => (
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
            <section className="bg-gradient-to-r from-orange-50 to-red-50 py-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-4">
                        A Culinary Journey Through Kashmir
                    </h2>
                    <p className="text-lg text-gray-700">
                        Kashmiri cuisine is a celebration of flavors, culture, and
                        tradition. Whether it’s savoring the royal Wazwan, sipping a warm
                        cup of Kahwa, or enjoying vegetarian classics, every dish tells a
                        story of this paradise on earth.
                    </p>
                </div>
            </section>
        </div>
    );
}
