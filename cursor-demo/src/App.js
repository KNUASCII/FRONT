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
