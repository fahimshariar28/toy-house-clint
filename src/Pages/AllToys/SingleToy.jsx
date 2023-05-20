import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
  const { _id, name, price, category, postedBy, quantity } = toy;
  return (
    <tr>
      <td></td>
      <td>{postedBy}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleToy;
