import Image from "next/image";

const FeaturesSection = ({ features }) => {
  return (
    <section className="features-section py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 animate-slide-left">
          Our Features
        </h2>
        <div className="features-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-slide-left feature-card bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
