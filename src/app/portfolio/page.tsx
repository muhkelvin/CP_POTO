"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";

// Data dummy portofolio
// Ganti array projects lama dengan ini:
const projects = [
    { id: 1, title: "Cosmetic Campaign 1", category: "Cosmetics", metrics: "+45% Conversion", client: "Lumina Beauty", img: "https://picsum.photos/400/500?random=1" },
    { id: 2, title: "Jewelry Collection 1", category: "Jewelry", metrics: "Featured in Vogue", client: "Aura Gems", img: "https://picsum.photos/400/500?random=2" },
    { id: 3, title: "Food Photography 1", category: "Food", metrics: "3x Social Engagement", client: "Cacao Noir", img: "https://picsum.photos/400/500?random=3" },
    { id: 4, title: "Cosmetic Campaign 2", category: "Cosmetics", metrics: "+20% CTR", client: "Glow Rx", img: "https://picsum.photos/400/500?random=4" },
    { id: 5, title: "Jewelry Collection 2", category: "Jewelry", metrics: "Sold out in 2 days", client: "Vanguard Time", img: "https://picsum.photos/400/500?random=5" },
    { id: 6, title: "Food Photography 2", category: "Food", metrics: "Menu Redesign", client: "La Trattoria", img: "https://picsum.photos/400/500?random=6" },
    { id: 7, title: "Cosmetic Campaign 3", category: "Cosmetics", metrics: "Best Seller Q3", client: "Aura Beauty", img: "https://picsum.photos/400/500?random=7" },
    { id: 8, title: "Jewelry Collection 3", category: "Jewelry", metrics: "Editorial Cover", client: "Elegance", img: "https://picsum.photos/400/500?random=8" },
    { id: 9, title: "Food Photography 3", category: "Food", metrics: "5-Star Rating", client: "Prime Grill", img: "https://picsum.photos/400/500?random=9" },
    { id: 10, title: "Cosmetic Campaign 4", category: "Cosmetics", metrics: "+30% Sales", client: "Naturelle", img: "https://picsum.photos/400/500?random=10" },
    { id: 11, title: "Jewelry Collection 4", category: "Jewelry", metrics: "Holiday Campaign", client: "Luxuria", img: "https://picsum.photos/400/500?random=11" },
    { id: 12, title: "Food Photography 4", category: "Food", metrics: "Award Winning", client: "Chateau Blanc", img: "https://picsum.photos/400/500?random=12" },
];

const categories = ["All", "Cosmetics", "Jewelry", "Food"];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-20 bg-lux-bg px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">
                        Our <span className="italic text-lux-gold">Masterpieces.</span>
                    </h1>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-light">
                        Jelajahi karya terbaik kami. Kami mengubah produk fisik menjadi pengalaman visual yang memikat dan mendorong penjualan.
                    </p>
                </div>
            </section>

            {/* Filter & Grid Section */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Filter Pills (SaaS Style) */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-zinc-900 text-white shadow-md"
                                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid Portofolio */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.id}
                                    onClick={() => setSelectedProject(project)}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 mb-4 group">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-semibold text-zinc-900">{project.title}</h3>
                                            <p className="text-sm text-zinc-500">{project.client}</p>
                                        </div>
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lux-bg text-zinc-900 group-hover:bg-lux-gold group-hover:text-white transition-colors">
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Case Study Modal (SaaS UI) */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 z-50 bg-zinc-900/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.95 }}
                            className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-white rounded-3xl shadow-2xl md:w-full md:max-w-3xl overflow-hidden flex flex-col md:flex-row border border-zinc-200"
                        >
                            <div className="aspect-video md:aspect-square md:w-1/2 bg-zinc-100 flex items-center justify-center">
                                <span className="text-zinc-400">High-Res Image</span>
                            </div>
                            <div className="p-8 md:w-1/2 flex flex-col justify-center relative">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-900 transition-colors bg-zinc-100 hover:bg-zinc-200 rounded-full"
                                >
                                    <X size={20} />
                                </button>
                                <span className="text-xs font-bold uppercase tracking-widest text-lux-gold mb-2">{selectedProject.category}</span>
                                <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-4">{selectedProject.title}</h3>
                                <p className="text-zinc-500 mb-6 text-sm leading-relaxed">
                                    Tantangannya adalah menangkap detail tekstur produk tanpa membuatnya terlihat datar. Kami menggunakan setup 4-titik pencahayaan untuk menciptakan dimensi yang sempurna.
                                </p>
                                <div className="bg-lux-bg p-4 rounded-xl border border-zinc-200">
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Key Result</p>
                                    <p className="text-xl font-semibold text-zinc-900">{selectedProject.metrics}</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}