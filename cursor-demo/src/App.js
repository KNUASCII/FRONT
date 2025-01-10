import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Register from "./routes/register";
import Page1 from "./routes/page1";
import Login from "./routes/login";
import Emotion from "./routes/emotion";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Go to Register</Link>
            </li>
            <li>
              <Link to="/page1">Go to Page1</Link>
            </li>
            <li>
              <Link to="/login">Go to Login</Link>
            </li>
            <li>
              <Link to="/emotion">Go to Emotion</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/emotion" element={<Emotion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
