import React from "react";
import Counter from "./contador";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div>
      <h1 class="text-center mt-5">Contador simple</h1>
      <Counter />
    </div>
  );
};

export default Home;
