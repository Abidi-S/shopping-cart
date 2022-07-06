import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      {/*gonna wrap the whole webapp inside these router tags */}
      <Header />
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
