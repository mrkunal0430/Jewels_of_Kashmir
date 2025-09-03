import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sonmarg() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-emerald-50">
            {/* HERO: split layout (image + intro) */}
            <header className="relative overflow-hidden">
                <div className="mx-auto max-w-6xl px-4 py-10 lg:flex lg:items-center lg:gap-8">
                    <div className="lg:w-1/2">
                        <img
                            src="/Tours/Sonmarg/1.webp"
                            alt="Sonmarg valley"
                            className="rounded-2xl w-full object-cover shadow-md h-80 lg:h-[520px]"
                            loading="lazy"
                        />
                    </div>

                    <div className="mt-6 lg:mt-0 lg:w-1/2">
                        <h1 className="text-4xl font-extrabold text-gray-900">Sonmarg — Meadow of Gold</h1>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Known as the gateway to Ladakh, Sonmarg dazzles with golden-hued meadows,
                            snow-covered peaks and glacier-fed rivers. A favorite for trekkers and
                            families alike, it offers camping, river rafting and some of the best high-altitude
                            trekking routes in Kashmir.
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
                            <li className="rounded-lg bg-white p-3 shadow-sm">📍 80 km from Srinagar</li>
                            <li className="rounded-lg bg-white p-3 shadow-sm">🕒 Best: May–Oct</li>
                            <li className="rounded-lg bg-white p-3 shadow-sm">⛰ Base for treks</li>
                            <li className="rounded-lg bg-white p-3 shadow-sm">🏞 Thajiwas Glacier nearby</li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Key Attractions */}
            <section className="mx-auto max-w-6xl px-4 py-10">
                <h2 className="text-2xl font-semibold text-gray-800">Must-see highlights</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <article className="rounded-2xl bg-white p-5 shadow-md">
                        <h3 className="font-bold">Thajiwas Glacier</h3>
                        <p className="mt-2 text-sm text-gray-600">A short pony trek or hike from Sonmarg town leads to this stunning glacier.</p>
                        <p className="mt-3 text-xs text-gray-500">Best enjoyed in May–June when partially melted.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-5 shadow-md">
                        <h3 className="font-bold">Baltal Valley</h3>
                        <p className="mt-2 text-sm text-gray-600">Picturesque camping ground, also the base camp for the Amarnath Yatra.</p>
                        <p className="mt-3 text-xs text-gray-500">Camping available in summer with prior booking.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-5 shadow-md">
                        <h3 className="font-bold">Zoji La Pass</h3>
                        <p className="mt-2 text-sm text-gray-600">A dramatic mountain pass connecting Kashmir to Ladakh, full of thrill and views.</p>
                        <p className="mt-3 text-xs text-gray-500">Accessible late May–Nov depending on snow.</p>
                    </article>
                </div>
            </section>

            {/* Suggested itineraries */}
            <section id="itinerary" className="mx-auto max-w-6xl px-4 py-10">
                <h2 className="text-2xl font-semibold text-gray-800">Suggested itineraries</h2>
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    {/* Family Escape */}
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Family Escape — 2 days</h4>
                        <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                            <li><strong>Day 1:</strong> Drive from Srinagar, pony ride to Thajiwas Glacier.</li>
                            <li><strong>Day 2:</strong> Picnic by Sindh River, short hike & return.</li>
                        </ol>
                        <p className="mt-3 text-xs text-gray-500">Who it’s for: families, couples, first-timers.</p>
                    </div>

                    {/* Adventure Trek */}
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Adventure Trek — 5+ days</h4>
                        <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                            <li><strong>Day 1:</strong> Arrive & acclimatize at Sonmarg.</li>
                            <li><strong>Day 2–3:</strong> Trek to Vishansar & Krishansar Lakes.</li>
                            <li><strong>Day 4–5:</strong> Continue Great Lakes trek or return.</li>
                        </ol>
                        <p className="mt-3 text-xs text-gray-500">Who it’s for: trekkers & nature photographers.</p>
                    </div>

                    {/* Short Escape */}
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Weekend Escape — 1–2 days</h4>
                        <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                            <li><strong>Day 1:</strong> Visit Thajiwas Glacier, local market, evening bonfire.</li>
                            <li><strong>Day 2:</strong> Baltal Valley or Zoji La Pass excursion.</li>
                        </ol>
                        <p className="mt-3 text-xs text-gray-500">Who it’s for: quick travelers & bikers.</p>
                    </div>
                </div>
            </section>

            {/* Local Experiences & Packing */}
            <section className="mx-auto max-w-6xl px-4 py-10 grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-md lg:col-span-2">
                    <h3 className="text-lg font-semibold">Local experiences</h3>
                    <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                        <li>Pony ride or trek to Thajiwas Glacier.</li>
                        <li>Camping by the Sindh River in summer months.</li>
                        <li>Try white-water rafting in the Sindh River (seasonal).</li>
                        <li>Explore the starting point of the Great Lakes trek.</li>
                    </ul>

                    <h3 className="mt-6 text-lg font-semibold">Packing & Practical checklist</h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg bg-amber-50 p-3">Warm clothes (nights can be cold)</div>
                        <div className="rounded-lg bg-amber-50 p-3">Trekking shoes & rain gear</div>
                        <div className="rounded-lg bg-amber-50 p-3">Portable charger & water bottle</div>
                        <div className="rounded-lg bg-amber-50 p-3">Cash (limited ATMs available)</div>
                    </div>
                </div>

                <aside className="rounded-2xl bg-white p-6 shadow-md">
                    <h4 className="font-semibold">Quick facts</h4>
                    <dl className="mt-3 text-sm text-gray-600 space-y-2">
                        <div>
                            <dt className="font-medium">Altitude</dt>
                            <dd>~2,700 m</dd>
                        </div>
                        <div>
                            <dt className="font-medium">Connectivity</dt>
                            <dd>Weak signal; better in Sonmarg town</dd>
                        </div>
                        <div>
                            <dt className="font-medium">Best For</dt>
                            <dd>Trekking, camping, riverside picnics</dd>
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
                            { q: 'When is the best time to visit Sonmarg?', a: 'May–Oct for trekking and camping; roads are often closed in winter due to heavy snow.' },
                            { q: 'How far is Thajiwas Glacier from Sonmarg?', a: 'About 3 km; accessible by pony or short hike.' },
                            { q: 'Is Sonmarg suitable for beginners in trekking?', a: 'Yes — short hikes to Thajiwas & Baltal are beginner-friendly.' },
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
