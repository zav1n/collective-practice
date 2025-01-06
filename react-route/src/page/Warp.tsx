import React from "react";
import { Outlet } from "react-router-dom";

const Warp: React.FC = () => {
  return (
    <>
      <div>Warp</div>

      <Outlet />
    </>
  );
} 

export default Warp;