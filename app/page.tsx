import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import LazySection from "@/components/LazySection";
import FloatingChatButton from "@/components/FloatingChatButton";


export default function Home() {
  return (
    <main>
        <HeroSection />
        <DestinationsSection />  
      <FloatingChatButton />
    </main>
  );
}