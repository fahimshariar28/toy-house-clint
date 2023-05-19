import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SingleToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    name,
    picture_url,
    rating,
    category,
    subCategory,
    price,
    quantity,
    description,
    postedBy,
  } = toy;
  return (
    <div className="w-9/12 mx-auto my-10 bg-base-200">
      <div className="hero">
        <div className="hero-content flex-col justify-center gap-5 lg:flex-row">
          <img src={picture_url} className="w-96 rounded-lg shadow-2xl" />
          <div>
            <h2 className="text-5xl font-bold text-primary">{name}</h2>
            <div className="flex justify-center items-center mt-5">
              <p>Rating: </p>
              <Rating
                readOnly
                style={{ maxWidth: 150 }}
                value={rating}
              ></Rating>
            </div>
            {postedBy && <p>Seller: {postedBy}</p>}
            <div className="flex justify-center items-center gap-5">
              <p>Category: {category}</p>
              <p>|</p>
              <p>Sub Category: {subCategory}</p>
            </div>
            <hr className="w-80 h-1 mx-auto my-4 bg-primary border-0 rounded" />
            <h1 className="text-4xl font-semibold textarea-accent">
              Price: ${price}
            </h1>
            <hr className="w-80 h-1 mx-auto my-4 bg-primary border-0 rounded" />
            <p>Quantity: {quantity}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-center">Description</h3>
        <p className="w-1/2 mx-auto text-base pb-5">{description}</p>
      </div>
    </div>
  );
};

export default SingleToy;
