import { useState } from "react";

export default function Sonmarg() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100">
            {/* Hero */}
            <section className="relative">
                <img
                    src="/Tours/sonmarg.jpg"
                    alt="Sonmarg valley"
                    className="h-80 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                        Sonmarg – Meadow of Gold
                    </h1>
                </div>
            </section>

            {/* Overview */}
            <section className="mx-auto max-w-5xl px-4 py-10">
                <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                    Sonmarg is a gateway to Ladakh and a land of glaciers, turquoise
                    streams, and alpine meadows. Popular for camping, trekking, and
                    river rafting on the Sindh River.
                </p>
            </section>

            {/* Highlights */}
            <section className="mx-auto max-w-5xl px-4 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                    { title: "Thajiwas Glacier", desc: "Short trek to a scenic glacier." },
                    { title: "Zoji La Pass", desc: "Mountain pass connecting Kashmir to Ladakh." },
                    { title: "River Rafting", desc: "Thrilling rapids on Sindh River." },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
                    >
                        <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                        <p className="text-sm mt-2 text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* Travel Info */}
            <section className="mx-auto max-w-5xl px-4 py-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Travel Info</h2>
                <ul className="space-y-2 text-gray-600">
                    <li>📍 Distance: 80 km from Srinagar (2.5 hrs drive).</li>
                    <li>🕒 Best Time: May–Sep for greenery, Nov–Feb for snow.</li>
                    <li>🏞️ Adventure: Ideal for trekking, camping & rafting.</li>
                </ul>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-5xl px-4 py-10">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800">FAQs</h3>
                    <div className="mt-4 divide-y divide-gray-100">
                        {[
                            { q: "Can I visit Sonmarg in winter?", a: "Yes, but heavy snow may block routes." },
                            { q: "Is Sonmarg on the way to Ladakh?", a: "Yes, it’s en route via Zoji La Pass." },
                            { q: "Activities for kids?", a: "Glacier trek (short), pony rides & camping." },
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
        </div>
    );
}
