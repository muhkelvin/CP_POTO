"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Simulasi pengiriman form (SaaS UX terbaik memberikan feedback instan)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const contactInfo = [
        { icon: <Mail size={20} />, label: "Email", value: "hello@luxshoot.com" },
        { icon: <Phone size={20} />, label: "Phone", value: "+62 812 3456 7890" },
        { icon: <MapPin size={20} />, label: "Studio", value: "Jakarta Selatan, ID" },
        { icon: <Clock size={20} />, label: "Hours", value: "Mon-Fri, 09:00 - 18:00 WIB" },
    ];

    return (
        <main className="bg-lux-bg min-h-screen">
            <Navbar />

            <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Kolom Kiri: Informasi & Trust */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="font-serif text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">
                            Let's craft your <br />
                            <span className="italic text-lux-gold">next campaign.</span>
                        </h1>
                        <p className="text-zinc-500 text-lg font-light mb-12 max-w-md leading-relaxed">
                            Kami siap membantu Anda menciptakan visual produk kelas atas. Ceritakan visi Anda, dan tim kami akan merespons dalam 24 jam.
                        </p>

                        {/* Grid Info Kontak */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {contactInfo.map((info, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-lux-gold shrink-0">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">{info.label}</p>
                                        <p className="text-zinc-900 font-medium">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* What happens next (CRO Section) */}
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                            <h3 className="font-semibold text-zinc-900 mb-4">What happens next?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Kami meninjau creative brief Anda.",
                                    "Sesi konsultasi awal (via Zoom/Meet).",
                                    "Pengajuan proposal & moodboard.",
                                ].map((step, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-lux-gold/10 text-lux-gold text-xs font-bold">
                                            {i + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Kolom Kanan: Formulir SaaS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-saas relative overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-zinc-700">Full Name</label>
                                            <input
                                                required type="text" id="name"
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lux-gold/30 focus:border-lux-gold transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Work Email</label>
                                            <input
                                                required type="email" id="email"
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lux-gold/30 focus:border-lux-gold transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-medium text-zinc-700">Service Required</label>
                                        <select
                                            id="service"
                                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lux-gold/30 focus:border-lux-gold transition-all appearance-none"
                                        >
                                            <option value="product">Product Photography</option>
                                            <option value="360">360° Interactive View</option>
                                            <option value="video">Video Production</option>
                                            <option value="retouch">High-End Retouching</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-zinc-700">Project Details</label>
                                        <textarea
                                            required id="message" rows={4}
                                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lux-gold/30 focus:border-lux-gold transition-all resize-none"
                                            placeholder="e.g., We are looking for a cinematic product shoot featuring dramatic weather elements and precise composition..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Send Inquiry <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-center text-xs text-zinc-400 mt-4 flex items-center justify-center gap-1">
                                        Your information is protected by our strict privacy policy.
                                    </p>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-2">Message Sent!</h3>
                                    <p className="text-zinc-500 mb-8 max-w-sm">
                                        Terima kasih telah menghubungi kami. Tim kami akan segera meninjau detail proyek Anda dan kembali dengan proposal awal dalam 24 jam.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}