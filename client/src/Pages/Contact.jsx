import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[470px] lg:h-[calc(100vh-64px)] flex items-center justify-center text-center">
                <img
                    src="Contact_Page.jpg"
                    alt="Jewels of Kashmir Houseboat"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <motion.div
                    className="relative z-10 max-w-2xl px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-[#f5c934] drop-shadow-lg">
                        Jewels of Kashmir
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-white">
                        Luxury Houseboats on Nigeen Lake, Srinagar
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <Link
                            to="/booking"
                            className="px-6 py-3 rounded-2xl bg-[#f5c934] text-gray-900 font-semibold hover:bg-yellow-400 transition"
                        >
                            Book Now
                        </Link>
                        <Link
                            to="/explore"
                            className="px-6 py-3 rounded-2xl bg-white/80 text-gray-900 font-semibold hover:bg-white transition"
                        >
                            Explore
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-br from-blue-50 via-yellow-100 to-white min-h-screen flex flex-col items-center justify-center px-4 py-16">
                {/* Title */}
                <div className="flex flex-col justify-center items-center gap-6 mb-12 text-center">
                    <h1 className="font-bold text-4xl md:text-5xl text-gray-800">Contact Us</h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
                        From your first message to your final farewell, the Jewels of Kashmir team is here to make every moment special. Contact us today and step into a world of elegance and comfort.
                    </p>
                </div>

                {/* Contact Box */}
                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-2xl overflow-hidden">

                    {/* Left - Contact Info */}
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-10 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                            <p className="mb-6">
                                Experience luxury and tradition with <b>Jewels of Kashmir Houseboats</b>.
                                Reach out to us for bookings, queries, or special requests.
                            </p>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center gap-3">
                                    <FaPhoneAlt /> <span>+91 98765 43210</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaEnvelope /> <span>info@jewelsofkashmir.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaMapMarkerAlt /> <span>Nigeen Lake, Srinagar, Kashmir</span>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-5 mt-8">
                            <a href="#" className="text-white text-2xl hover:text-gray-200"><FaFacebook /></a>
                            <a href="#" className="text-white text-2xl hover:text-gray-200"><FaInstagram /></a>
                            <a href="https://wa.me/919876543210" className="text-white text-2xl hover:text-gray-200"><FaWhatsapp /></a>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
                        <form className="space-y-5">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">Contact Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 9876543210"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full max-w-6xl mt-12 rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.123456!2d74.8342!3d34.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f123456789%3A0x987654321!2sNigeen%20Lake!5e0!3m2!1sen!2sin!4v1693299999999"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Nigeen Lake Map"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}
