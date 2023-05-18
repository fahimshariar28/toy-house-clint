import { useEffect, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReactTabs = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleTabClick = (category) => {
    setCategoryName(category.categoryName);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      })
      .catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div className="mt-5">
      <Tabs>
        <TabList>
          {categories.map((category) => (
            <Tab key={category._id} onClick={() => handleTabClick(category)}>
              {category.categoryName}
            </Tab>
          ))}
        </TabList>
        {toys.map((toy) => (
          <TabPanel key={toy._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={toy.picture_url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{toy.name}</h2>
                <div className="flex justify-center">
                  <p>Price: ${toy.price}</p>
                  <p>Rating: {toy.rating}</p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ReactTabs;
