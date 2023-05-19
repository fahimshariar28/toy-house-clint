import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const notify = () => toast("Toy Added");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/post-toy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          notify();
        }
        console.log(result);
      });
    console.log(data);
  };

  return (
    <div className="w-9/12 mx-auto">
      <h2 className="my-5 text-2xl text-primary text-center font-bold">
        Add your Toys
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="p-3 m-1 border-2 w-2/6 hidden"
          defaultValue={user.displayName}
          {...register("postedBy")}
        />
        <input
          className="p-3 m-1 border-2 w-2/6 hidden"
          defaultValue={user.email}
          {...register("email")}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Toy Name"
          {...register("name")}
          defaultValue="Red Racer"
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Picture URL"
          {...register("url")}
          defaultValue="https://i.ibb.co/VSPjdMc/red-racer.jpg"
        />
        <br />
        <label className="label">
          <span className="label-text font-bold">Category</span>
        </label>
        <select
          required
          className="p-3 m-1 border-2 w-1/2"
          {...register("category")}
        >
          <option className="disabled selected"> </option>
          <option value="Boys"> Boys</option>
          <option value="Girls"> Girls</option>
        </select>
        <select
          required
          className="p-3 m-1 border-2 w-1/2"
          {...register("subCategory")}
        >
          <option className="disabled selected"> </option>
          <option value="Toy-Cars"> Toy-Cars</option>
          <option value="Action-Figures"> Action-Figures</option>
          <option value="Animal-Toys"> Animal-Toys</option>
          <option value="Dolls"> Dolls</option>
          <option value="Girls-Makeup"> Girls-Makeup</option>
          <option value="Cooking-Toys"> Cooking-Toys</option>
        </select>
        <br />
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Price"
          {...register("price")}
          defaultValue={100}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Rating"
          {...register("rating")}
          defaultValue={4.5}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Quantity"
          {...register("quantity")}
          defaultValue={10}
        />
        <input
          required
          className="p-3 m-1 border-2 w-4/5"
          placeholder="Description"
          {...register("description")}
          defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="btn bg-primary" type="submit" />
      </form>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddToys;
