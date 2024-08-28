import React from "react";
import Sidebar from "./components/Sidebar";
import RoutePage from "./components/RoutePage";

export default function HomePage() {
  return (
    <div className="home">
      <Sidebar />
      <RoutePage />
    </div>
  );
}
