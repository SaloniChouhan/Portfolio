import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import NavBar from "./Components/navbar";
import Projects from "./Components/projects";

function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
