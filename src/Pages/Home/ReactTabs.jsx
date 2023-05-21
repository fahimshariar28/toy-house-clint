import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReactTabs = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("SportsCar");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-house-server-sable.vercel.app/toysCategory")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://toy-house-server-sable.vercel.app/toys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category]);

  return (
    <Tabs>
      <TabList>
        {categories.map((category, index) => (
          <Tab onClick={() => setCategory(category)} key={index}>
            {category}
          </Tab>
        ))}
      </TabList>

      {categories.map((category, index) => (
        <TabPanel key={index}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {toys.slice(0, 3).map((toy, index) => (
              <div
                key={index}
                className="card card-compact bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={toy.picture_url} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{toy.name}</h2>
                  <p>Price: ${toy.price}</p>
                  <div className="flex justify-between">
                    <Rating
                      readOnly
                      style={{ maxWidth: 150 }}
                      value={toy.rating}
                    />
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${toy._id}`}>
                        <button className="btn btn-primary">
                          Show Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ReactTabs;
