import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
  const {
    _id,
    name,
    price,
    rating,
    picture_url,
    category,
    subCategory,
    postedBy,
    quantity,
  } = toy;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={picture_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-evenly gap-5 text-primary">
          <h2 className="card-title">{name}</h2>
          {postedBy && <h2 className="card-title">Seller: {name}</h2>}
        </div>
        <div>
          <p>Category: {category}</p>
          <p>Sub Category: {subCategory}</p>
        </div>
        <div className="flex justify-center">
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
        </div>
        <p>Quantity: {quantity}</p>
        <div className="card-actions justify-end">
          <Link to={`/toy/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
