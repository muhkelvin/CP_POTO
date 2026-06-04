export default function SocialProof() {
    // Placeholder nama brand untuk simulasi logo SaaS
    const brands = ["AURA", "LUMINA", "VANGUARD", "ELEVATE", "NOVA"];

    return (
        <section className="py-12 bg-white border-b border-zinc-100">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-medium text-zinc-400 mb-8 uppercase tracking-widest">
                    Trusted by industry-leading brands
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <span className="font-serif text-xl md:text-2xl font-bold text-zinc-400 tracking-wider">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}