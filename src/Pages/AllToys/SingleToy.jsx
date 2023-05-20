import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
  const {
    _id,
    name,
    price,
    rating,
    picture_url,
    category,
    postedBy,
    quantity,
  } = toy;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={picture_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="text-primary">
          <h2 className="card-title">{name}</h2>
          {postedBy && <h2 className="card-title">Seller: {postedBy}</h2>}
        </div>
        <p>Category: {category}</p>
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
