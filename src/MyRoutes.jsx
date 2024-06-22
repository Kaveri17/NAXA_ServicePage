import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Service from "./pages/Service";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
