import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Note: this single file exports two components: Pahalgam and Sonmarg
// Usage: import { Pahalgam, Sonmarg } from './Tours_Pahalgam_Sonmarg';

export default function Pahalgam() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-gray-100">
            {/* HERO: split layout (image + intro) */}
            <header className="relative overflow-hidden">
                <div className="mx-auto max-w-6xl px-4 py-10 lg:flex lg:items-center lg:gap-8">
                    <div className="lg:w-1/2">
                        <img
                            src="/Tours/pahalgam_hero.jpg"
                            alt="Pahalgam valley"
                            className="rounded-2xl w-full object-cover shadow-md h-80 lg:h-[520px]"
                        />
                    </div>

                    <div className="mt-6 lg:mt-0 lg:w-1/2">
                        <h1 className="text-4xl font-extrabold text-gray-900">Pahalgam — Valley of Tranquil Rivers</h1>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Nestled on the banks of the Lidder River, Pahalgam combines pine-scented valleys,
                            trout-filled streams and easy access to high-altitude treks. Great for couples,
                            families and trekkers — this guide gives you itineraries, local experiences and
                            pro tips so your trip feels effortless and unforgettable.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <Link to="#book" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow hover:brightness-105">
                                Plan & Book
                            </Link>
                            <a href="#itinerary" className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-5 py-2 text-sm font-semibold text-emerald-700">
                                View Itinerary
                            </a>
                        </div>

                        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                            <li className="rounded-lg bg-white p-3 shadow-sm">📍 90 km from Srinagar</li>
                            <li className="rounded-lg bg-white p-3 shadow-sm">🕒 Best: Mar–Oct</li>
                            <li className="rounded-lg bg-white p-3 shadow-sm">🎒 Family friendly</li>
                            <li className="rounded-lg bg-white p-3 shadow-sm">🚶‍♂️ Easy treks & horse rides</li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Key Attractions (masonry-like) */}
            <section className="mx-auto max-w-6xl px-4 py-10">
                <h2 className="text-2xl font-semibold text-gray-800">Must-see highlights</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <article className="rounded-2xl bg-white p-5 shadow-md">
                        <h3 className="font-bold">Betaab Valley</h3>
                        <p className="mt-2 text-sm text-gray-600">Scenic meadow named after the film; perfect for photos and easy walks.</p>
                        <p className="mt-3 text-xs text-gray-500">Tip: Visit early morning to avoid tour crowds.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-5 shadow-md">
                        <h3 className="font-bold">Aru & Chandanwari</h3>
                        <p className="mt-2 text-sm text-gray-600">Gateway for moderate treks, pony rides and glacier views.</p>
                        <p className="mt-3 text-xs text-gray-500">Rental: Ponies available near the trailhead.</p>
                    </article>

                    <article className="rounded-2xl bg-white p-5 shadow-md">
                        <h3 className="font-bold">Lidder River</h3>
                        <p className="mt-2 text-sm text-gray-600">Crystal clear waters ideal for riverside strolls and trout fishing.</p>
                        <p className="mt-3 text-xs text-gray-500">Local guide recommended for fishing permits.</p>
                    </article>
                </div>
            </section>

            {/* Suggested itineraries — compact + experiential */}
            <section id="itinerary" className="mx-auto max-w-6xl px-4 py-10">
                <h2 className="text-2xl font-semibold text-gray-800">Suggested itineraries</h2>
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    {/* Relaxed */}
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Relaxed — 3 days</h4>
                        <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                            <li><strong>Day 1:</strong> Arrive, riverside walk, local market & sunset at Betaab.</li>
                            <li><strong>Day 2:</strong> Aru Valley day trip, pony ride to meadows, picnic.</li>
                            <li><strong>Day 3:</strong> Short trek to Baisaran (Mini Switzerland) & return.</li>
                        </ol>
                        <p className="mt-3 text-xs text-gray-500">Who it's for: families, couples, low-effort explorers.</p>
                    </div>

                    {/* Adventure */}
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Adventure — 5+ days</h4>
                        <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                            <li><strong>Day 1:</strong> Arrive & prep for trek, local acclimatisation.</li>
                            <li><strong>Day 2–3:</strong> Kolahoi Glacier approach (permit & guide recommended).</li>
                            <li><strong>Day 4–5:</strong> Multi-day trek options or extension to Sinthan Top.</li>
                        </ol>
                        <p className="mt-3 text-xs text-gray-500">Who it's for: trekkers, photographers & experienced hikers.</p>
                    </div>

                    {/* Short escape */}
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Weekend Escape — 2 days</h4>
                        <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                            <li><strong>Day 1:</strong> Drive from Srinagar, evening walk & local cuisine.</li>
                            <li><strong>Day 2:</strong> Visit Betaab + Aru and return to Srinagar.</li>
                        </ol>
                        <p className="mt-3 text-xs text-gray-500">Who it's for: short-stay planners.</p>
                    </div>
                </div>
            </section>

            {/* Local Experiences & Packing */}
            <section className="mx-auto max-w-6xl px-4 py-10 grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-md lg:col-span-2">
                    <h3 className="text-lg font-semibold">Local experiences</h3>
                    <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                        <li>Try Kashmiri trout: recommended at riverside cafés.</li>
                        <li>Attend local craft markets — shareef embroidered shawls and walnut woodwork.</li>
                        <li>Pony ride across meadows (negotiate prices beforehand).</li>
                        <li>Short photography workshops at sunrise in Betaab.</li>
                    </ul>

                    <h3 className="mt-6 text-lg font-semibold">Packing & Practical checklist</h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg bg-amber-50 p-3">Layered clothing + waterproof jacket</div>
                        <div className="rounded-lg bg-amber-50 p-3">Sturdy walking shoes & sunscreen</div>
                        <div className="rounded-lg bg-amber-50 p-3">Basic first-aid & reusable water bottle</div>
                        <div className="rounded-lg bg-amber-50 p-3">Power bank & local currency (cash)</div>
                    </div>
                </div>

                <aside className="rounded-2xl bg-white p-6 shadow-md">
                    <h4 className="font-semibold">Quick facts</h4>
                    <dl className="mt-3 text-sm text-gray-600 space-y-2">
                        <div>
                            <dt className="font-medium">Altitude</dt>
                            <dd>~2,200 m</dd>
                        </div>
                        <div>
                            <dt className="font-medium">Connectivity</dt>
                            <dd>Mobile signal variable; limited in high trails</dd>
                        </div>
                        <div>
                            <dt className="font-medium">Permits</dt>
                            <dd>Not required for short treks; check for high-altitude routes</dd>
                        </div>
                    </dl>

                    <a href="#book" className="mt-6 inline-block w-full rounded-full bg-emerald-600 px-4 py-2 text-center font-semibold text-white">Start booking</a>
                </aside>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <div className="rounded-2xl bg-white p-6 shadow-md">
                    <h3 className="text-lg font-bold">FAQs</h3>
                    <div className="mt-4 divide-y divide-gray-100">
                        {[
                            { q: 'Is Pahalgam safe after dark?', a: 'Main tourist areas are safe; avoid wandering remote tracks alone at night.' },
                            { q: 'Can I hire a guide locally?', a: 'Yes — reputable local guides operate from the town centre.' },
                            { q: 'Are permits needed for Kolahoi trek?', a: 'Yes for higher glacier treks — obtain through local authorities or tour operators.' },
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

            {/* CTA Strip */}
            <section id="book" className="bg-gradient-to-r from-emerald-600 to-emerald-500 py-10 text-center text-white">
                <h3 className="text-2xl font-bold">Ready to escape to Pahalgam?</h3>
                <p className="mt-2 text-sm">Custom itineraries, local guides and hassle-free transport — tailored for you.</p>
                <a className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-emerald-600 font-semibold" href="#">Get started</a>
            </section>
        </div>
    );
}

export function Sonmarg() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-gray-100">
            {/* Hero: full-bleed with caption cards */}
            <header className="relative">
                <img src="/Tours/sonmarg_hero.jpg" alt="Sonmarg" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-6 bottom-8 max-w-xl text-white">
                    <h1 className="text-4xl font-extrabold">Sonmarg — Gateway to the High Himalaya</h1>
                    <p className="mt-3 text-sm text-white/90">Thajiwas Glacier, river rafting and dramatic mountain passes — perfect for adventure and photographers.</p>
                    <div className="mt-4 flex gap-3">
                        <a href="#plans" className="rounded-full bg-yellow-400 px-4 py-2 font-semibold text-black">View Plans</a>
                        <a href="#activities" className="rounded-full border border-white px-4 py-2 text-white">Activities</a>
                    </div>
                </div>
            </header>

            {/* Feature strip (cards with imagery) */}
            <section className="mx-auto max-w-6xl px-4 py-8">
                <div className="grid gap-6 sm:grid-cols-3">
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img src="/Tours/sonmarg_glacier.jpg" alt="Thajiwas Glacier" className="h-40 w-full object-cover" />
                        <div className="p-4 bg-white">
                            <h4 className="font-semibold">Thajiwas Glacier</h4>
                            <p className="mt-2 text-sm text-gray-600">Short hikes, snowfields and photo ops.</p>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img src="/Tours/sonmarg_rafting.jpg" alt="Rafting" className="h-40 w-full object-cover" />
                        <div className="p-4 bg-white">
                            <h4 className="font-semibold">River Rafting</h4>
                            <p className="mt-2 text-sm text-gray-600">Summer rapids on the Sindh for thrill seekers.</p>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img src="/Tours/sonmarg_pass.jpg" alt="Zoji La" className="h-40 w-full object-cover" />
                        <div className="p-4 bg-white">
                            <h4 className="font-semibold">Zoji La Pass</h4>
                            <p className="mt-2 text-sm text-gray-600">Dramatic drive — route to Ladakh.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Itineraries with choices: family / adventure / photo */}
            <section id="plans" className="mx-auto max-w-6xl px-4 py-10">
                <h2 className="text-2xl font-semibold text-gray-800">Curated plans</h2>
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Family-friendly — 2 days</h4>
                        <p className="mt-2 text-sm text-gray-600">Easy walks, pony rides, glacier visit and comfortable stays.</p>
                        <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                            <li>Day 1: Drive from Srinagar, Thajiwas visit</li>
                            <li>Day 2: Leisure, riverbank picnic & return</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Adventure — 3 days</h4>
                        <p className="mt-2 text-sm text-gray-600">Rafting, high-altitude camping and approach to Zoji La.</p>
                        <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                            <li>Day 1: Arrival & prep</li>
                            <li>Day 2: Rafting + short hikes</li>
                            <li>Day 3: Drive to Zoji La viewpoint</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-bold">Photography — 1–2 days</h4>
                        <p className="mt-2 text-sm text-gray-600">Golden hour at the glacier, wide-angle mountain vistas and long exposures at dusk.</p>
                        <p className="mt-3 text-xs text-gray-500">Pack: tripod, polariser, extra batteries.</p>
                    </div>
                </div>
            </section>

            {/* Activities block with CTA grid */}
            <section id="activities" className="mx-auto max-w-6xl px-4 py-10">
                <h2 className="text-2xl font-semibold">Activities & booking</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-semibold">Thajiwas Glacier Walk</h4>
                        <p className="mt-2 text-sm text-gray-600">Short guided walk (30–90 mins). Pony rides available for children or long routes.</p>
                        <a className="mt-4 inline-block rounded-full bg-yellow-400 px-4 py-2 font-semibold" href="#">Book Guide</a>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <h4 className="font-semibold">River Rafting Packages</h4>
                        <p className="mt-2 text-sm text-gray-600">Half-day to full-day packages with safety gear and instructor.</p>
                        <a className="mt-4 inline-block rounded-full border border-sky-300 px-4 py-2 font-semibold" href="#">Check Availability</a>
                    </div>
                </div>
            </section>

            {/* Safety & travel info */}
            <section className="mx-auto max-w-6xl px-4 py-10 grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-md lg:col-span-2">
                    <h3 className="text-lg font-semibold">How to reach & safety</h3>
                    <p className="mt-3 text-sm text-gray-600">Sonmarg is approx 80 km from Srinagar (2–3 hours depending on traffic). Roads are scenic but can be narrow — drive carefully, especially during winter. For high-altitude excursions, hire local drivers experienced with mountain passes.</p>

                    <h4 className="mt-4 font-semibold">Safety Tips</h4>
                    <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                        <li>Check local weather and road conditions before travel.</li>
                        <li>Hire certified rafting operators with safety gear.</li>
                        <li>Keep ID and emergency contacts handy; mobile coverage can be patchy.</li>
                    </ul>
                </div>

                <aside className="rounded-2xl bg-white p-6 shadow-md">
                    <h4 className="font-semibold">Quick facts</h4>
                    <p className="mt-2 text-sm text-gray-600">Altitude: ~2,800 m (varies by viewpoint)</p>
                    <p className="mt-2 text-sm text-gray-600">Best time: May–Sep for rafting & trekking</p>
                    <a href="#activities" className="mt-4 inline-block rounded-full bg-yellow-400 px-4 py-2 font-semibold">Book Activity</a>
                </aside>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <div className="rounded-2xl bg-white p-6 shadow-md">
                    <h3 className="text-lg font-bold">FAQs</h3>
                    <div className="mt-4 divide-y divide-gray-100">
                        {[
                            { q: 'Is Sonmarg suitable for a day trip?', a: 'Yes — many visitors do a day trip from Srinagar, but staying a night gives better sunrise/sunset photo opportunities.' },
                            { q: 'Are ponies safe for children?', a: 'Yes when hired from registered operators; always check saddles & tack.' },
                            { q: 'Do I need permits for Zoji La?', a: 'Zoji La is a transit pass to Ladakh; check current local regulations if crossing towards Ladakh.' },
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

            {/* Footer CTA */}
            <section className="bg-gradient-to-r from-sky-600 to-sky-500 py-12 text-center text-white">
                <h3 className="text-2xl font-bold">Make Sonmarg your next adventure</h3>
                <p className="mt-2 text-sm">Packages that include guides, transfers and activity bookings.</p>
                <a className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sky-600 font-semibold" href="#">Customize Trip</a>
            </section>
        </div>
    );
}
