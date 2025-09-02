import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import mmtLogo from "../assets/makemytrip.svg";


export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            setIsSubmitted(true);
            e.target.reset(); // clear form
        } else {
            alert("Something went wrong. Please try again.");
        }
    };



    // whatsup handler 
    const handleWhatsupSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const message = e.target.message.value;
        const whatsappUrl = `https://wa.me/918750075080?text=Hi, my name is ${name}. ${message}`;
        window.open(whatsappUrl, "_blank");
        e.target.reset();
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative overflow-hidden w-full h-[200px] sm:h-[400px] md:h-[470px] lg:h-[calc(100vh-64px)] flex items-end justify-center text-center">
                <img
                    src="Contact_Page.jpg"
                    alt="Jewels of Kashmir Houseboat"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <motion.div
                    className="relative z-10 max-w-2xl px-4 pb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-[#f5c934] drop-shadow-lg">
                        Welcome to Contact Page
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-white max-w-xl mx-auto leading-relaxed text-center">
                        Have a question or need booking help?
                        Drop us a message — we’re just a click away! 🌴✨
                    </p>
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
                    <div className="bg-gradient-to-br from-yellow-600 to-yellow-400 text-white p-8 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
                            <p className="mb-4">
                                Experience luxury and tradition with <b>Jewels of Kashmir Houseboats</b>.
                                Reach out to us for bookings, queries, or special requests.
                            </p>
                            <ul className="space-y-2 text-lg">
                                <li className="flex items-center gap-3">
                                    <FaPhoneAlt /> <span>+91 9906607462</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaEnvelope /> <span>info.jewelofkashmir@gmail.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaMapMarkerAlt /> <span>Nigeen Lake, Srinagar, Kashmir</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleWhatsupSubmit} className="space-y-4">
                                <input type="text" name="name" placeholder="Your Name" required className="bg-white text-black w-full p-2 border rounded" />
                                <textarea name="message" placeholder="Your Message" required className="bg-white text-black w-full p-2 border rounded" />
                                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded flex gap-3 justify-center items-center hover:scale-105 transition-transform duration-300"><FaWhatsapp className="text-lg" /> Send via WhatsApp</button>
                            </form>
                        </div>

                        {/* Social Links */}
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                            <div className="flex space-x-4">
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/jewelofkashmirhouseboat/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-blue-600 text-white text-xl hover:scale-110 transition-transform duration-300"
                                >
                                    <FaFacebook />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/jewel_kashmir_houseboat/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white text-xl hover:scale-110 transition-transform duration-300"
                                >
                                    <FaInstagram />
                                </a>

                                {/* MMT */}
                                <a
                                    href="https://app.mmyt.co/Xm2V/8xo8sd2w"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 px-3 rounded-full bg-sky-400 text-white text-md hover:scale-110 transition-transform duration-300"
                                >
                                    Make My Trip
                                </a>


                            </div>


                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Send us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* 🔑 Replace with your Web3Forms Access Key */}
                            <input
                                type="hidden"
                                name="access_key"
                                value="YOUR_ACCESS_KEY_HERE"
                            />

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 9876543210"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="jewelsofkashmir@gmail.com"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Write your message..."
                                    required
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

                        {/* ✅ Thank You Popup */}
                        {isSubmitted && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        Thank You!
                                    </h3>
                                    <p className="text-gray-600">
                                        Your message has been sent successfully. We will contact you soon.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
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
