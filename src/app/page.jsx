import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <section id="home"><Hero/></section>
      <section id="about"><About/></section>
      <section id="services"><Services/></section>
    </main>
  );
}
