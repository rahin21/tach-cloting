import Collections from "@/components/home/collection";
import ContactUs from "@/components/home/contactUs";
import Hero from "@/components/home/hero";
import NewsLetter from "@/components/home/newsLetter";
import VideoSection from "@/components/home/videoSection";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Collections/>
      <VideoSection/>
      <NewsLetter/>
      <ContactUs/>
      <div className="absolute left-0 w-full border-black/30 border-b-[1px] my-3"></div>
    </main>
  );
}
