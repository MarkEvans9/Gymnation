import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ExerciseDetail from "./components/Pages/ExerciseDetail/ExerciseDetail";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="App container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
