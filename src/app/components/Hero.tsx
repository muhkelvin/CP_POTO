"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-lux-bg">
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm mb-8"
                >
                    <div className="flex text-lux-gold">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                        ))}
                    </div>
                    <span className="text-xs font-medium text-zinc-600">Trusted by 500+ premium brands</span>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                        Elevate Your <br className="hidden md:block" />
                        <span className="italic text-lux-gold">Product Visuals.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 font-light">
                        High-end product photography, advanced retouching, and 360° experiences designed to increase your conversion rates.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/portfolio"
                        className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
                    >
                        View Portfolio
                        <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="/services"
                        className="flex items-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all w-full sm:w-auto justify-center"
                    >
                        Explore Services
                    </Link>
                </motion.div>

                {/* Hero Image / Mockup Placeholder (SaaS Style) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-20 relative max-w-5xl mx-auto"
                >
                    <div className="aspect-[16/9] w-full bg-zinc-100 rounded-2xl border border-zinc-200 shadow-saas overflow-hidden relative group">
                        <img
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1080&q=75"
                            alt="Premium Watch Photography"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        {/* Overlay gradient tipis agar tidak terlalu flat */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}