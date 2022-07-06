import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      {/*gonna wrap the whole webapp inside these router tags */}
      <Header />
      <div className="App">
        {/*tutorial incorrect/outdated, read react-router-dom docs */}
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
