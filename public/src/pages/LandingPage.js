import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import Header from '../components/Header';
import NewsletterSection from '../components/NewsletterSection';
import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/team/TeamSection';
import Products from '../components/products/ProductsSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <Products />
      <ServicesSection />
      <TeamSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;
