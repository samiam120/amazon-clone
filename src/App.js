import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HPlusMobiledata } from "@mui/icons-material";
import Checkout from "./Checkout";

function App() {
  return (
    
    //BEM block, element, modifier
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
