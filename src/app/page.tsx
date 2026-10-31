
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Why from "@/components/Why";
import Product from "@/components/Products";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Product />

      <div className="lower-sections">
        <Testimonial />
        <FAQ />
      </div>

      <Location />
      <Footer />
    </main>
  );
}
