import Banner from "./Banner";
import Contact from "./Contact";
import Gallery from "./Gallery";
import ReactTabs from "./ReactTab/ReactTabs";

const Home = () => {
  return (
    <div className="w-9/12 mx-auto mt-10">
      <Banner></Banner>
      <Gallery></Gallery>
      <ReactTabs></ReactTabs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
