import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter basename="my-site">
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
