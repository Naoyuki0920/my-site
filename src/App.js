
// react-router-domのインポートを追加
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/my-site">Home</Link>
        <br />
        <Link to="/my-site/PrivacyPolicy">PrivacyPolicy</Link>
        <br />

        <Routes>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route exact path="/my-site" element={<Home />} />
          <Route path="/my-site/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
