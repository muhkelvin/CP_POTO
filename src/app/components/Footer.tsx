import Link from "next/link";
import { Camera, Globe, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-zinc-100 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">

                    {/* Brand & Tagline */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="font-serif text-2xl font-bold text-zinc-900 tracking-tight block mb-4">
                            LUX<span className="text-lux-gold">SHOOT.</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-light max-w-xs">
                            Elevating product visuals through premium photography, advanced retouching, and immersive 360° experiences.
                        </p>
                        <div className="flex items-center gap-4 text-zinc-400">
                            <a href="#" className="hover:text-lux-gold transition-colors p-2 -ml-2 rounded-full hover:bg-lux-bg">
                                <Camera size={18} />
                            </a>
                            <a href="#" className="hover:text-lux-gold transition-colors p-2 rounded-full hover:bg-lux-bg">
                                <Globe size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-4">
                            {["About Us", "Portfolio", "Careers", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(" ", "")}`}
                                        className="text-sm text-zinc-500 hover:text-lux-gold transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-6 tracking-wide">Services</h4>
                        <ul className="space-y-4">
                            {[
                                "Product Photography",
                                "High-End Retouching",
                                "360° Interactive",
                                "Cinematic Video"
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/services"
                                        className="text-sm text-zinc-500 hover:text-lux-gold transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 mb-6 tracking-wide">Reach Out</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-zinc-500">
                                <Mail size={16} className="shrink-0 mt-0.5 text-zinc-400" />
                                <a href="mailto:hello@luxshoot.com" className="hover:text-lux-gold transition-colors">
                                    hello@luxshoot.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-zinc-500">
                                <MapPin size={16} className="shrink-0 mt-0.5 text-zinc-400" />
                                <span className="leading-relaxed">
                                    Jakarta Selatan,<br />
                                    DKI Jakarta, ID
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Legal Section */}
                <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-400 text-xs">
                        © {currentYear} LUXSHOOT Studio. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}