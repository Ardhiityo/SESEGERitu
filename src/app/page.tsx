"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Why from "@/components/Why";
import Product from "@/components/Products";
import Promo from "@/components/Promo";
import OrderForm from "@/components/OrderForm";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Social from "@/components/Social";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Product />
      <Promo />
      <OrderForm />
      <Testimonial />
      <FAQ />
      <Social />
      <Contact />
      <Footer />
    </>
  );
}
