import { useEffect, useState } from "react";
import SingleToy from "./SIngleToy";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { totalToys } = useLoaderData();
  const toysPerPage = 20;
  const totalPages = Math.ceil(totalToys / toysPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  useTitle("All Toys");
  console.log(search);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://toy-house-server-fahimshariar28.vercel.app/toys?page=${currentPage}&limit=${toysPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [currentPage, toysPerPage]);
  useEffect(() => {
    if (search) {
      fetch(
        `https://toy-house-server-fahimshariar28.vercel.app/searchToy/${search}`
      )
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
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <SingleToy key={toy._id} toy={toy}></SingleToy>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center space-x-2 mt-5">
        {pageNumbers.map((number) => (
          <button
            onClick={() => setCurrentPage(number + 1)}
            key={number}
            className="bg-primary text-white px-3 py-2 rounded"
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
