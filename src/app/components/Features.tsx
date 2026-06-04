"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles, Box } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Camera size={24} className="text-lux-gold" />,
            title: "Precision & Clarity",
            description: "Menerapkan pengaturan resolusi ultra-tinggi yang dipadukan dengan teknik pencahayaan sinematik untuk menangkap setiap detail produk Anda dengan sempurna."
        },
        {
            icon: <Sparkles size={24} className="text-lux-gold" />,
            title: "High-End Retouching",
            description: "Penyuntingan pasca-produksi tingkat lanjut untuk memastikan warna yang akurat, tekstur yang bersih, dan tampilan akhir yang mewah."
        },
        {
            icon: <Box size={24} className="text-lux-gold" />,
            title: "360° Interactive",
            description: "Berikan pengalaman imersif kepada pelanggan dengan tampilan produk 360 derajat yang dapat diputar secara langsung di browser."
        }
    ];

    return (
        <section className="py-24 bg-lux-bg">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
                        Designed for <span className="italic text-lux-gold">Conversion.</span>
                    </h2>
                    <p className="text-zinc-500 text-lg font-light">
                        Visual berkualitas tidak hanya sekadar indah; mereka membangun kepercayaan dan mendorong penjualan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-lux-gold/30 hover:shadow-saas transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-lux-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 mb-3">{feature.title}</h3>
                            <p className="text-zinc-500 leading-relaxed font-light text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}