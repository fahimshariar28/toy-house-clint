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

        {/* <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default ReactTabs;
