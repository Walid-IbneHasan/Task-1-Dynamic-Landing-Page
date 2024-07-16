const CallToActionSection = ({ ctaText, ctaLink }) => {
  return (
    <section className="cta-section py-20 bg-[#F4F4F5]">
      <div className="container mx-auto px-6 text-center">
        <p className="animate-slide-left text-2xl md:text-3xl font-semibold mb-8 animate-fade-in">
          {" "}
          {ctaText}
        </p>
        <a
          href={ctaLink}
          className="animate-slide-left cta-button bg-white text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;
