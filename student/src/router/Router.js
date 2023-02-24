import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import MainHome from "../view/home/MainHome";
import MainStudent from "../view/student/MainStudent";
import MainTest from "../test/MainTest";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainHome/>}></Route>
          <Route path="/student" element={<MainStudent/>}></Route>
          <Route path="/test" element={<MainTest/>}>  </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
