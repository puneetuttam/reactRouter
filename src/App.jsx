import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <Header></Header>
  <Home></Home>
  <Footer></Footer>
  </>;
}

export default App;
