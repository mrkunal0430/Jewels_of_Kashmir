import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Gulmarg() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-emerald-50">
            {/* HERO: split layout (image + intro) */}
            <header className="relative overflow-hidden">
                <div className="mx-auto max-w-6xl px-4 py-10 lg:flex lg:items-center lg:gap-8">
                    <div className="lg:w-1/2">
                        <img
                            src="/Tours/Gulmarg/1.jpg"
                            alt="Gulmarg valley"
                            className="rounded-2xl w-full object-cover shadow-md h-80 lg:h-[520px]"
                        />
                    </div>

                    <div className="mt-6 lg:mt-0 lg:w-1/2">
                        <h1 className="text-4xl font-extrabold text-gray-900">Gulmarg — Meadow of Flowers</h1>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Famous for its breathtaking meadows, snow-capped mountains and world’s highest
                            Gondola ride, Gulmarg is Kashmir’s adventure capital. Whether you’re skiing down
                            powder slopes, playing golf in alpine settings, or enjoying quiet meadow walks —
                            Gulmarg offers a unique mix of thrill and tranquility.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow hover:brightness-105">
                                Plan & Book
                            </Link>
                            <a href="#itinerary" className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-5 py-2 text-sm font-semibold text-emerald-700">
                                View Itinerary
                            </a>
                        </div>

                        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                            <li className="rounded-lg bg-white p-3 shadow-sm">📍 50 km from Srinagar</li>
                            <li className="rounded-lg bg-white p-3 shadow-sm">🕒 Best: Dec–Mar (snow) & May–Oct (meadows)</li>
                            <li className="rounded-lg bg-white p-3 shadow-sm">⛷ Adventure & leisure</li>
                            <li className="rounded-lg bg-white p-3 shadow-sm">🚡 World’s highest Gondola</li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Key Attractions */}
            <section className="mx-auto max-w-6xl px-4 py-10">
                <h2 className="text-2xl font-semibold text-gray-800">Must-see highlights</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <article className="rounded-2xl bg-white p-5 shadow-md">
                        <h3 className="font-bold">Gulmarg Gondola</h3>
                        <p className="mt-2 text-sm text-gray-600">One of the world’s highest cable cars, reaching over 4,000 m with panoramic Himalayan views.</p>
                        <p className="mt-3 text-xs text-gray-500">Tip: Book tickets online in advance during peak season.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-5 shadow-md">
                        <h3 className="font-bold">Alpather Lake</h3>
                        <p className="mt-2 text-sm text-gray-600">A stunning high-altitude lake, often frozen till June, ideal for day treks.</p>
                        <p className="mt-3 text-xs text-gray-500">Best visited with a guide from Phase II Gondola station.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-5 shadow-md">
                        <h3 className="font-bold">Gulmarg Golf Course</h3>
                        <p className="mt-2 text-sm text-gray-600">World’s highest 18-hole golf course surrounded by pine forests and peaks.</p>
                        <p className="mt-3 text-xs text-gray-500">Open May–Oct, equipment rentals available.</p>
                    </article>
                </div>
            </section>

            {/* Suggested itineraries */}
            <section id="itinerary" className="mx-auto max-w-6xl px-4 py-10">
                <h2 className="text-2xl font-semibold text-gray-800">Suggested itineraries</h2>
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    {/* Winter Adventure */}
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Winter Adventure — 3 days</h4>
                        <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                            <li><strong>Day 1:</strong> Arrive & Gondola Phase I, snow play, skiing basics.</li>
                            <li><strong>Day 2:</strong> Skiing/snowboarding sessions, hot Kahwa breaks.</li>
                            <li><strong>Day 3:</strong> Snow trek or sledge ride, return to Srinagar.</li>
                        </ol>
                        <p className="mt-3 text-xs text-gray-500">Who it’s for: ski enthusiasts, families & first-time snow lovers.</p>
                    </div>

                    {/* Summer Escape */}
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Summer Escape — 2 days</h4>
                        <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                            <li><strong>Day 1:</strong> Gondola ride, pony trek to Khilanmarg meadows.</li>
                            <li><strong>Day 2:</strong> Golf course visit, short trek to Alpather Lake.</li>
                        </ol>
                        <p className="mt-3 text-xs text-gray-500">Who it’s for: leisure travelers & couples.</p>
                    </div>

                    {/* Extended Adventure */}
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Extended Adventure — 5+ days</h4>
                        <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                            <li><strong>Day 1:</strong> Arrive, Gondola & acclimatization.</li>
                            <li><strong>Day 2–3:</strong> Trek to Alpather Lake & camping.</li>
                            <li><strong>Day 4–5:</strong> Mountain biking or trek extension to Ningle Nallah.</li>
                        </ol>
                        <p className="mt-3 text-xs text-gray-500">Who it’s for: trekkers, adventure seekers, photographers.</p>
                    </div>
                </div>
            </section>

            {/* Local Experiences & Packing */}
            <section className="mx-auto max-w-6xl px-4 py-10 grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-md lg:col-span-2">
                    <h3 className="text-lg font-semibold">Local experiences</h3>
                    <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                        <li>Try skiing, snowboarding or sledging during winter months.</li>
                        <li>Ride the Gondola to Phase II for unbeatable Himalayan views.</li>
                        <li>Explore Khilanmarg meadows by pony in summer.</li>
                        <li>Enjoy authentic Kashmiri wazwan in local restaurants.</li>
                    </ul>

                    <h3 className="mt-6 text-lg font-semibold">Packing & Practical checklist</h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg bg-amber-50 p-3">Warm layers + snow gear (winter)</div>
                        <div className="rounded-lg bg-amber-50 p-3">Comfortable trekking shoes</div>
                        <div className="rounded-lg bg-amber-50 p-3">Sunscreen & sunglasses (snow glare)</div>
                        <div className="rounded-lg bg-amber-50 p-3">Cash for rentals & local stalls</div>
                    </div>
                </div>

                <aside className="rounded-2xl bg-white p-6 shadow-md">
                    <h4 className="font-semibold">Quick facts</h4>
                    <dl className="mt-3 text-sm text-gray-600 space-y-2">
                        <div>
                            <dt className="font-medium">Altitude</dt>
                            <dd>~2,650 m</dd>
                        </div>
                        <div>
                            <dt className="font-medium">Connectivity</dt>
                            <dd>Good in town, limited on higher slopes</dd>
                        </div>
                        <div>
                            <dt className="font-medium">Best For</dt>
                            <dd>Skiing, snowboarding, trekking & meadow walks</dd>
                        </div>
                    </dl>

                    <a href="/contact" className="mt-6 inline-block w-full rounded-full bg-emerald-600 px-4 py-2 text-center font-semibold text-white">Contact Us</a>
                </aside>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <div className="rounded-2xl bg-white p-6 shadow-md">
                    <h3 className="text-lg font-bold">FAQs</h3>
                    <div className="mt-4 divide-y divide-gray-100">
                        {[
                            { q: 'When is the best time to visit Gulmarg?', a: 'For snow sports: Dec–Mar; for green meadows: May–Oct.' },
                            { q: 'Is Gulmarg safe for tourists?', a: 'Yes, it’s a well-patrolled tourist hub with strong infrastructure.' },
                            { q: 'Do I need to pre-book the Gondola?', a: 'Highly recommended, especially in peak summer and winter months.' },
                        ].map((item, idx) => (
                            <div key={idx} className="py-3">
                                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="flex w-full justify-between text-left">
                                    <span className="font-medium text-gray-800">{item.q}</span>
                                    <span className="text-gray-400">{openFaq === idx ? '−' : '+'}</span>
                                </button>
                                {openFaq === idx && <p className="mt-2 text-sm text-gray-600">{item.a}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}
