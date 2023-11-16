import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter basename="my-site">
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/PrivacyPolicy">PrivacyPolicy</Link>
        <br />
        <Routes>
          <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path={`${process.env.PUBLIC_URL}/PrivacyPolicy`} element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
