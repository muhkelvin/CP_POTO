import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import SocialProof from "@/app/components/SocialProof";
import Features from "@/app/components/Features";
import FeaturedWorks from "@/app/components/FeaturedWorks";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <FeaturedWorks />
    </main>
  );
}