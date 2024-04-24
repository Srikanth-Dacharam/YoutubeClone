import React, { useEffect, useState } from "react";

export default function HomeScreen() {
  const [categories, setCategories] = useState([]);

  const URL = "";
  async function fetchCategories() {
    const response = await fetch(URL);
    const data = await response.json();
    setCategories(data);
    console.log(data);
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="bg-red-200 rounded-md">
      {categories.map((category) => {
        <li>{}</li>;
      })}
    </div>
  );
}
