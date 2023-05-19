import { useLoaderData } from "react-router-dom";

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
  } = toy;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col justify-between gap-5 lg:flex-row">
          <img src={picture_url} className="w-full rounded-lg shadow-2xl" />
          <div>
            <h2 className="text-5xl font-bold text-primary">{name}</h2>
            <p>Rating: {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
