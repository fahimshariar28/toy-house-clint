import "@smastrom/react-rating/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
const GallerySection = () => {
  AOS.init();

  return (
    <section className="my-5">
      <div className="my-container mx-auto">
        <h1 className="text-3xl font-bold text-center my-5" data-aos="fade-up">
          Toys Gallery
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          <img
            src="https://i.ibb.co/VSPjdMc/red-racer.jpg"
            className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-105"
            alt=""
          />
          <img
            src="https://i.ibb.co/nC7LDPv/blue-car.jpg"
            className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-105"
            alt=""
          />
          <img
            src="https://i.ibb.co/1dByLrV/monster-truck.png"
            className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-105"
            alt=""
          />
          <img
            src="https://i.ibb.co/hstmX3K/police-car.png"
            className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-105"
            alt=""
          />
          <img
            src="https://i.ibb.co/Dpqt0wp/Convertible-Cruiser-car.jpg"
            className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-105"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
