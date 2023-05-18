import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/D9mxVjv/banner-img.jpg"
          className="w-full rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-3xl text-primary font-bold w-6/12 mx-auto text-center">
            No matter what Toy you want,
            <br /> you can find every kind of toy here
          </h2>
          <p className="text-neutral font-semibold mt-3 w-10/12 mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ea autem natus modi laborum. Fuga, illum modi tempore
            magnam facilis quas quaerat aut unde voluptatibus tenetur autem
            fugiat, vero ratione culpa recusandae accusamus placeat!
          </p>
          <div className="flex justify-center mt-3">
            <Link to="/allToys">
              <button className="bg-primary rounded-lg px-3 py-2 text-white font-semibold">
                Go to Shop <FaArrowRight className="inline"></FaArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
