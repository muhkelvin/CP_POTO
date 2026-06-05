"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FeaturedWorks() {
    const works = [
        { id: 1, title: "Chronograph Masterpiece", category: "Watches", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80" },
        { id: 2, title: "Velvet Elegance", category: "Cosmetics", img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80" },
        { id: 3, title: "Artisan Leather", category: "Accessories", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80" },
        { id: 4, title: "Diamond Collection", category: "Jewelry", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
                            Recent <span className="italic text-lux-gold">Masterpieces.</span>
                        </h2>
                        <p className="text-zinc-500 text-lg font-light max-w-lg">
                            Setiap bidikan dirancang secara presisi untuk menonjolkan estetika produk Anda.
                        </p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-lux-gold transition-colors group"
                    >
                        View full portfolio
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer block"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 mb-6 border border-zinc-200">
                                <Image
                                    src={work.img}
                                    alt={work.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={index < 2}
                                />
                            </div>
                            <div className="flex items-center justify-between px-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-900 mb-1">{work.title}</h3>
                                    <p className="text-sm text-zinc-500">{work.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}