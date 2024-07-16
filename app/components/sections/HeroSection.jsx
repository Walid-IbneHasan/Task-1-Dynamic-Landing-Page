import Image from "next/image";
import heroImage from "../../assets/images/hero.jpg";

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="hero-section relative h-screen bg-gray-800 text-white flex items-center justify-center overflow-hidden">
      <Image
        src={heroImage}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-50 transition-opacity duration-500"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-left">
          {title}
        </h1>
        <p className="text-xl md:text-2xl animate-slide-left">{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
