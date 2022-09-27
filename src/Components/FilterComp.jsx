import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryFilters = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryFilters || []);
  const initialSortBy = searchParams.getAll("sortBy");
  const [sortBy, setSortBy] = useState(initialSortBy[0] || "");

  // if value is present remove it else add it

  const handleFilterCheckbox = (e) => {
    // console.log(e.target.value)
    const newCategories = [...category];
    if (newCategories.includes(e.target.value)) {
      // remove it
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  };
  console.log(category);

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category || sortBy) {
      // console.log(category)
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      // console.log(params);
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);
  // if category changes then update the search params in url
  console.log("sortby values", sortBy);
  return (
    <div>
      <h3>
        <u>FilterComponents</u>
      </h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            checked={category.includes("Novel")}
            onChange={handleFilterCheckbox}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            checked={category.includes("Motivational")}
            onChange={handleFilterCheckbox}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            checked={category.includes("Science_Fiction")}
            onChange={handleFilterCheckbox}
          />
          <label>Science Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Thriller"
            checked={category.includes("Thriller")}
            onChange={handleFilterCheckbox}
          />
          <label>Thriller</label>
        </div>
      </div>
      <h3>Sort Component</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy == "asc"}
        />
        <label>Ascending</label>
        <br />
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy == "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};

export default FilterComp;
