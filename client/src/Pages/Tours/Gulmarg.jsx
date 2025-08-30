import { useState } from "react";

export default function Gulmarg() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100">
            {/* Hero */}
            <section className="relative">
                <img
                    src="/Tours/gulmarg_1.jpg"
                    alt="Gulmarg snowy mountains"
                    className="h-[400px] w-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/50" /> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Gulmarg – Jewel of Kashmir
                    </h1>
                    <p className="mt-3 max-w-2xl text-white/90">
                        A year-round paradise with snowy slopes, lush meadows, and the
                        world-famous Gulmarg Gondola. Perfect for adventure seekers and
                        nature lovers alike.
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-800">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Gulmarg, meaning <span className="italic">“Meadow of Flowers”</span>,
                    sits at 8,500 ft in the Pir Panjal range. Known for its ski resorts,
                    wildflower meadows, and Asia’s highest cable car, it’s a destination
                    that offers something in every season. In winter, the slopes transform
                    into a skiing hub, while in summer, the valley blooms with endless
                    wildflowers and pine forests.
                </p>
            </section>

            {/* Highlights */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Top Attractions in Gulmarg
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Gulmarg Gondola",
                            desc: "One of the highest cable cars in the world, taking you up to 13,000 ft.",
                        },
                        {
                            title: "Apharwat Peak",
                            desc: "Snow-covered for most of the year, ideal for skiing & breathtaking views.",
                        },
                        {
                            title: "Alpather Lake",
                            desc: "A stunning frozen lake at the base of Apharwat, trek-friendly in summer.",
                        },
                        {
                            title: "St. Mary’s Church",
                            desc: "A 100-year-old heritage church surrounded by alpine meadows.",
                        },
                        {
                            title: "Golf Course",
                            desc: "World’s highest 18-hole golf course with panoramic views.",
                        },
                    ].map((h, i) => (
                        <div
                            key={i}
                            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{h.title}</h3>
                            <p className="mt-2 text-gray-600 text-sm">{h.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Suggested Itinerary */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Suggested Itinerary
                </h2>
                <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <h3 className="font-bold text-gray-800">Day 1 – Arrival & Local Exploration</h3>
                        <p className="mt-2 text-gray-600">
                            Arrive from Srinagar (2 hrs drive). Visit the golf course, take a
                            pony ride, and relax at the meadows. Evening stroll in the town.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <h3 className="font-bold text-gray-800">Day 2 – Gondola & Apharwat Peak</h3>
                        <p className="mt-2 text-gray-600">
                            Take the Gondola ride up to Apharwat Peak. Enjoy skiing/snowboarding
                            in winter or trekking to Alpather Lake in summer.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <h3 className="font-bold text-gray-800">Day 3 – Excursions</h3>
                        <p className="mt-2 text-gray-600">
                            Take a day trip to Tangmarg or Khilanmarg. Explore St. Mary’s
                            Church and enjoy photography in the pine forests.
                        </p>
                    </div>
                </div>
            </section>

            {/* Travel Info */}
            <section className="mx-auto max-w-6xl px-4 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <h4 className="font-semibold text-gray-800">📍 How to Reach</h4>
                    <p className="mt-2 text-gray-600 text-sm">
                        Nearest airport: Srinagar (50 km). From there, taxis and shared
                        cabs take 2 hours.
                    </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <h4 className="font-semibold text-gray-800">🕒 Best Time</h4>
                    <p className="mt-2 text-gray-600 text-sm">
                        Dec–Feb for skiing, Mar–Jun for flowers & trekking.
                    </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <h4 className="font-semibold text-gray-800">🎒 Travel Tips</h4>
                    <p className="mt-2 text-gray-600 text-sm">
                        Carry layered clothing, book Gondola tickets online in advance, and
                        keep cash for local rides.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-6xl px-4 py-16">
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <h3 className="text-lg font-bold text-gray-800">FAQs</h3>
                    <div className="mt-4 divide-y divide-gray-100">
                        {[
                            {
                                q: "How many days are enough for Gulmarg?",
                                a: "2–3 days are perfect to cover major attractions and enjoy snow activities.",
                            },
                            {
                                q: "Is Gulmarg safe for tourists?",
                                a: "Yes, Gulmarg is safe and popular among families and solo travelers.",
                            },
                            {
                                q: "Do I need a guide for skiing?",
                                a: "Beginners are advised to hire professional ski instructors for safety.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="py-3">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="flex w-full justify-between text-left"
                                >
                                    <span className="font-medium text-gray-800">{item.q}</span>
                                    <span className="text-gray-400">{openFaq === idx ? "−" : "+"}</span>
                                </button>
                                {openFaq === idx && (
                                    <p className="mt-2 text-sm text-gray-600">{item.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-10 text-center">
                <h2 className="text-2xl font-bold text-white">
                    Ready to Explore Gulmarg?
                </h2>
                <p className="mt-2 text-white/90">
                    Book your trip now and experience the beauty of Kashmir’s winter
                    wonderland.
                </p>
                <button className="mt-4 rounded-full bg-white px-6 py-3 font-semibold text-yellow-600 shadow hover:shadow-lg">
                    Plan Your Trip
                </button>
            </section>
        </div>
    );
}
