import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/V9vz8w5/superman.jpg"
            className="w-full rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Become a member of our community and boost your sell
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              consequuntur labore dicta ut deserunt adipisci beatae dolores
              consequatur sapiente mollitia eaque quos nemo rerum veritatis,
              aliquam quod tenetur impedit sunt incidunt temporibus earum?
              Itaque omnis, accusamus repudiandae tempora sunt quisquam at enim
              libero est, ipsa distinctio rem fugiat, quaerat ducimus?
            </p>
            <Link to="/register">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
