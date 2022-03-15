import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Login from "./pages/login/login";
import Main from "./pages/main/main";

function Router() {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default Router;