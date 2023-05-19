import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteToy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.deletedCount) {
          const remainingToys = toys.filter((toy) => toy._id !== id);
          setToys(remainingToys);
          alert("Toy Deleted");
        }
      });
  };
  return (
    <div className="w-9/12 mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>{toy.name}</td>
                <td>{toy.category}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                {/* <td>
                  <button className="btn btn-accent">Edit</button>
                </td> */}
                {/* open a daisy ui modal to update details */}
                <td>
                  <button className="btn btn-accent">Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
