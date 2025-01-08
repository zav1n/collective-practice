import React from "react";
import { Outlet } from "react-router-dom";

const PageLayout: React.FC = () =>{
  return <>
    <h1>header</h1>
    <Outlet></Outlet>
    <h1>footer</h1>
  </>
};

export default PageLayout