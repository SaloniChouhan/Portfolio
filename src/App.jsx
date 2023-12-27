import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import NavBar from "./Components/navbar";
import Projects from "./Components/projects";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
