// 하이퍼링크 부활
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Register from "./routes/register";
import Page1 from "./routes/page1";
import Login from "./routes/login";
import Newdiary from "./routes/newdiary";
import Stat from "./routes/stat";
import Diarylog from "./routes/diarylog";

function App() {
  return (
    <Router>
      <div>
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
              <Link to="/newdiary">Go to newdiary</Link>
            </li>
            <li>
              <Link to="/stat">Go to Stat</Link>
            </li>
            <li>
              <Link to="/diarylog">Go to Diarylog</Link>
            </li>
          </ul>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newdiary" element={<Newdiary />} />
          <Route path="/stat" element={<Stat />} />
          <Route path="/diarylog" element={<Diarylog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
