import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeatureSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import CallToActionSection from "./components/sections/CallToActionSection";
const data = {
  hero: {
    title: "Welcome to Our Service",
    subtitle: "We provide the best solutions for your needs",
  },
  features: [
    {
      image: "/feature1.jpg",
      title: "Feature One",
      description: "Description of feature one.",
    },
    {
      image: "/feature2.jpg",
      title: "Feature Two",
      description: "Description of feature two.",
    },
    {
      image: "/feature1.jpg",
      title: "Feature Three",
      description: "Description of feature three.",
    },
  ],
  testimonials: [
    {
      image: "/testimonial1.jpg",
      name: "Jane Doe",
      quote: "This service changed my life!",
    },
    {
      image: "/testimonial1.jpg",
      name: "Jane Two",
      quote: "This service changed my life!",
    },
    {
      image: "/testimonial1.jpg",
      name: "Jane Three",
      quote: "This service changed my life!",
    },
    {
      image: "/testimonial1.jpg",
      name: "Jane Four",
      quote: "This service changed my life!",
    },
  ],
  cta: {
    ctaText: "Ready to start?",
    ctaLink: "/signup",
  },
};

export default function Page() {
  return (
    <div>
      <HeroSection title={data.hero.title} subtitle={data.hero.subtitle} />
      <FeaturesSection features={data.features} />
      <TestimonialsSection testimonials={data.testimonials} />
      <CallToActionSection
        ctaText={data.cta.ctaText}
        ctaLink={data.cta.ctaLink}
      />
    </div>
  );
}
