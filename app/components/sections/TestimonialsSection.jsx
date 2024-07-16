"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="testimonials-section py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 animate-slide-left">
          What Our Clients Say
        </h2>
        <Slider
          {...settings}
          className="testimonials-slider animate-slide-left"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="text-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
                <blockquote className="italic mb-4 text-center">
                  {testimonial.quote}
                </blockquote>
                <p className="font-semibold text-center">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
