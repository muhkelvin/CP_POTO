"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Award, Camera, MonitorPlay, Users } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Premium Brands", value: "500+" },
    { label: "Projects Completed", value: "2.5K" },
    { label: "Industry Awards", value: "12" },
  ];

  const team = [
    { name: "John Doe", role: "Lead Photographer", exp: "Ex-Vogue Studio" },
    { name: "Jane Smith", role: "Senior Stylist", exp: "Luxury Goods Specialist" },
    { name: "Mark Lee", role: "Post-Production", exp: "CGI & Retouching Expert" },
  ];

  const gear = [
    { icon: <Camera size={24} />, name: "Hasselblad H6D", desc: "Medium format for ultimate detail." },
    { icon: <MonitorPlay size={24} />, name: "Profoto Lighting", desc: "Cinematic & precise light shaping." },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Story Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Crafting Visual <span className="italic text-lux-gold">Excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg leading-relaxed font-light"
          >
            Berdiri sejak tahun 2012, LUXSHOOT lahir dari obsesi terhadap presisi. Kami menggabungkan seni fotografi komersial dengan standar teknologi tertinggi untuk memberikan visual yang berbicara langsung kepada pelanggan premium Anda.
          </motion.p>
        </div>
      </section>

      {/* Stats Section (SaaS Metrics Style) */}
      <section className="py-16 bg-lux-bg border-y border-zinc-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-200">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">{stat.value}</h3>
                <p className="text-sm text-zinc-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Equipment Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Team */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-8">The Experts Behind The Lens</h2>
            <div className="space-y-4">
              {team.map((member, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl border border-zinc-200 hover:border-lux-gold/30 hover:shadow-saas transition-all bg-white">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">{member.name}</h4>
                      <p className="text-sm text-zinc-500">{member.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium bg-lux-bg px-3 py-1 rounded-full text-zinc-600 hidden md:block">
                    {member.exp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack / Equipment */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-8">Our Arsenal</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gear.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-lux-bg border border-zinc-100">
                  <div className="text-lux-gold mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-zinc-900 mb-2">{item.name}</h4>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA inline */}
            <div className="mt-8 p-8 rounded-2xl bg-zinc-900 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold mb-2">Ready to start?</h3>
                <p className="text-zinc-400 text-sm mb-6 max-w-xs">Konsultasikan kebutuhan visual brand Anda dengan tim kami.</p>
                <a href="/contact" className="inline-block bg-white text-zinc-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors">
                  Contact Us
                </a>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-lux-gold/20 rounded-full blur-3xl" />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}