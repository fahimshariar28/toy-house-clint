import { useEffect, useState } from "react";
import SingleToy from "./SIngleToy";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  useTitle("All Toys");
  console.log(search);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    if (search) {
      fetch(`http://localhost:5000/searchToy/${search}`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        })
        .catch((error) => console.log(error));
    }
  }, [search]);
  if (loading) {
    return (
      <div className="flex my-10 justify-center items-center space-x-2 text-primary">
        <svg
          className="w-6 h-6 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Loading...</span>
      </div>
    );
  }
  return (
    <div className="w-9/12 mx-auto">
      <h1 className="text-2xl text-primary text-center font-bold mt-5">
        All Toys
      </h1>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-full p-3 border-2 border-gray-300 rounded mt-5"
        />
      </div>
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
