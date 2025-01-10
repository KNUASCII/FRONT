// 하이퍼링크 부활
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Auth from "./routes/auth";
import Intro from "./routes/intro";
import Newdiary from "./routes/newdiary";
import Stat from "./routes/stat";
import Diarylog from "./routes/diarylog";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Intro />} />
          <Route path="/newdiary" element={<Newdiary />} />
          <Route path="/stat" element={<Stat />} />
          <Route path="/diarylog" element={<Diarylog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
