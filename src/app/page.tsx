import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Training from "@/components/Training";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Training />
        <Team />
        <Partners />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
