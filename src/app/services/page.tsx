"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Check, Camera, Wand2, Video, Layers, Plus, Minus } from "lucide-react";
import Link from "next/link";

export default function Services() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const services = [
        {
            icon: <Camera size={24} />,
            title: "Premium Product Photography",
            desc: "Pengambilan gambar ultra-high-definition dengan fokus pada komposisi yang presisi dan tekstur yang tajam. Kami memanfaatkan pengaturan pencahayaan sinematik—seperti simulasi golden hour atau pencahayaan atmosferik yang dramatis—untuk memberikan karakter visual yang unik pada setiap produk.",
        },
        {
            icon: <Wand2 size={24} />,
            title: "Advanced Retouching",
            desc: "Proses pasca-produksi tingkat lanjut yang memastikan setiap debu, goresan, atau pantulan yang tidak diinginkan dihilangkan, menghasilkan estetika yang bersih dan sempurna tanpa mengurangi keaslian material.",
        },
        {
            icon: <Video size={24} />,
            title: "Cinematic Video Production",
            desc: "Video produk dinamis yang dirancang untuk kampanye media sosial dan e-commerce. Kami menghadirkan elemen visual yang kuat dan pergerakan kamera yang mulus untuk menceritakan kisah brand Anda.",
        },
        {
            icon: <Layers size={24} />,
            title: "360° Interactive Views",
            desc: "Tampilan interaktif 360 derajat yang memungkinkan pelanggan memutar dan memperbesar produk secara langsung di browser, terbukti secara signifikan meningkatkan conversion rate.",
        },
    ];

    const pricing = [
        {
            name: "Basic",
            price: "$299",
            desc: "Ideal untuk startup dan rilis produk tunggal.",
            features: [
                "Up to 5 High-Res Photos",
                "Standard Retouching",
                "White/Solid Background",
                "Web & Print Ready (300dpi)",
                "3 Days Delivery",
            ],
            popular: false,
        },
        {
            name: "Premium",
            price: "$499",
            desc: "Pilihan terbaik untuk e-commerce dan kampanye visual.",
            features: [
                "Up to 15 High-Res Photos",
                "Advanced Cinematic Retouching",
                "Creative Props & Styling",
                "1x 360° Interactive View",
                "Commercial Usage Rights",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "$799",
            desc: "Solusi visual menyeluruh untuk brand skala besar.",
            features: [
                "Unlimited Photos (1 Day Shoot)",
                "Complex Set Builds & Weather FX",
                "15 Sec Cinematic Video Hook",
                "Priority Support & Revisions",
                "Full Copyright Buyout",
            ],
            popular: false,
        },
    ];

    const faqs = [
        { q: "Berapa ukuran maksimal produk yang bisa difoto?", a: "Untuk paket standar, kami menerima produk dengan ukuran maksimal 50x50x50cm. Untuk produk yang lebih besar, silakan hubungi kami untuk penyesuaian studio." },
        { q: "Apakah saya perlu mengirimkan creative brief?", a: "Ya, kami sangat menyarankan klien untuk mengirimkan brief atau moodboard. Ini membantu tim kami memastikan bahwa komposisi, pencahayaan, dan estetika visual sejalan dengan visi brand Anda." },
        { q: "Berapa lama proses pengerjaan (turnaround time)?", a: "Proses produksi memakan waktu 3-5 hari kerja setelah produk kami terima dan brief disetujui. Untuk paket Enterprise, jadwal akan disesuaikan dengan skala proyek." },
        { q: "Bagaimana sistem pengiriman produk ke studio?", a: "Anda dapat menggunakan layanan kurir ke alamat studio kami di Jakarta Selatan. Biaya pengiriman dan pengembalian produk ditanggung oleh klien." },
    ];

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-lux-bg px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">
                        Tailored solutions for <br className="hidden md:block" />
                        <span className="italic text-lux-gold">premium brands.</span>
                    </h1>
                    <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Dari sekadar dokumentasi hingga mahakarya visual. Pilih layanan yang sesuai dengan skala dan ambisi perusahaan Anda.
                    </p>
                </div>
            </section>

            {/* Detailed Services Grid */}
            <section className="py-24 px-6 border-b border-zinc-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((srv, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-lux-gold shrink-0">
                                    {srv.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-zinc-900 mb-3">{srv.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed font-light">{srv.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section (SaaS Standard) */}
            <section className="py-24 px-6 bg-lux-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Simple, transparent pricing.</h2>
                        <p className="text-zinc-500 text-lg font-light">Tidak ada biaya tersembunyi. Pilih paket yang sesuai dengan kebutuhan Anda.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricing.map((tier, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`relative p-8 rounded-3xl border ${tier.popular
                                    ? "bg-zinc-900 border-zinc-900 text-white shadow-2xl scale-100 lg:scale-105 z-10"
                                    : "bg-white border-zinc-200 text-zinc-900 shadow-saas"
                                    } flex flex-col`}
                            >
                                {tier.popular && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lux-gold text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                                        Most Popular
                                    </span>
                                )}

                                <div className="mb-8">
                                    <h3 className={`text-xl font-semibold mb-2 ${tier.popular ? "text-white" : "text-zinc-900"}`}>{tier.name}</h3>
                                    <p className={`text-sm mb-6 h-10 ${tier.popular ? "text-zinc-400" : "text-zinc-500"}`}>{tier.desc}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-4xl md:text-5xl font-bold tracking-tight ${tier.popular ? "text-white" : "text-zinc-900"}`}>{tier.price}</span>
                                        <span className={`text-sm ${tier.popular ? "text-zinc-400" : "text-zinc-500"}`}>/project</span>
                                    </div>
                                </div>

                                <div className="flex-grow space-y-4 mb-8">
                                    {tier.features.map((feat, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className={`flex items-center justify-center shrink-0 w-5 h-5 rounded-full ${tier.popular ? "bg-white/10 text-lux-gold" : "bg-lux-bg text-lux-gold"}`}>
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className={`text-sm font-medium ${tier.popular ? "text-zinc-300" : "text-zinc-600"}`}>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/contact"
                                    className={`w-full text-center py-4 rounded-xl font-medium transition-all ${tier.popular
                                        ? "bg-white text-zinc-900 hover:bg-zinc-100"
                                        : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-zinc-500 font-light">Punya pertanyaan lain? Jangan ragu untuk menghubungi kami.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="border border-zinc-200 rounded-2xl overflow-hidden transition-colors hover:border-zinc-300"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white"
                                >
                                    <span className="font-medium text-zinc-900">{faq.q}</span>
                                    <span className="text-zinc-400 shrink-0 ml-4">
                                        {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-zinc-500 text-sm leading-relaxed border-t border-zinc-100">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}