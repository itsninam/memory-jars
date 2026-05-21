import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function Home() {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
}

export default Home;
