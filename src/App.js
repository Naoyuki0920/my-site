
// react-router-domのインポートを追加
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/PrivacyPolicy">PrivacyPolicy</Link>
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
