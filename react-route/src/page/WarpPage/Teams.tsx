import React from "react";
import { Outlet } from "react-router-dom";

const Teams: React.FC = () => {
  return (
    <>
      <h1>Teams</h1>
      <Outlet />
    </>
  );
}

export default Teams;