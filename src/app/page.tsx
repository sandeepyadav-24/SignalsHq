import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ValuePoints from "@/components/ValuePoints";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Feature from "@/components/Feature";
import ValueProposition from "@/components/ValueProposition";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ValuePoints />
      <Feature />
      <Faq />
    </>
  );
}
