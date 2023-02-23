import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import MainHome from "../view/home/MainHome";
import MainStudent from "../view/student/MainStudent";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainHome/>}></Route>
          <Route path="/student" element={<MainStudent/>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
