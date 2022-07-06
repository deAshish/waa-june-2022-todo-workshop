import React from "react";
import Header from "../header/Header";
import MyRouter from "../todo/MyRouter";
import Counter from "../counter/Counter";
const Dashboard = () => {
  return (
    <div>
      (<Header></Header>
      <MyRouter></MyRouter>
      <Counter></Counter>)
    </div>
  );
};
export default Dashboard;
