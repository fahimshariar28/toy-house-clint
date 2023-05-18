import { useEffect, useState } from "react";
import SingleToy from "./SIngleToy";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-9/12 mx-auto">
      <h1 className="text-2xl text-primary text-center font-bold mt-5">
        All Toys
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {!seeAll
          ? toys
              .slice(0, 20)
              .map((toy) => <SingleToy key={toy._id} toy={toy}></SingleToy>)
          : toys.map((toy) => <SingleToy key={toy._id} toy={toy}></SingleToy>)}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setSeeAll(!seeAll)}
          className={`my-5 bg-sky-500 px-5 py-2 rounded font-bold text-white ${
            seeAll ? "hidden" : "block"
          }`}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default AllToys;
