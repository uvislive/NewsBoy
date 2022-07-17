import './App.css';
import Newscomponenet from "./Newscomponent";
import Navbar from "./Navbar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Newscomponenet category="de&category=science" />} />
          <Route path="/us" element={<Newscomponenet category="us" />} />
          <Route path="/home" element={<Newscomponenet category="in" />} />
          <Route path="/science" element={<Newscomponenet category="de&category=science" />} />
          <Route path="/business" element={<Newscomponenet category="de&category=business" />} />
          <Route path="/technology" element={<Newscomponenet category="de&category=technology" />} />
          <Route path="/entertainment" element={<Newscomponenet category="de&category=entertainment" />} />
          <Route path="/health" element={<Newscomponenet category="de&category=health" />} />

          {/* <Newscomponenet category="in" />
          <Newscomponenet category="de&category=business" />
          <Newscomponenet category="de&category=science" />
          <Newscomponenet category="de&category=health" />
          <Newscomponenet category="de&category=sports" />
          <Newscomponenet category="de&category=general" />
          <Newscomponenet category="de&category=technology" />
          <Newscomponenet category="de&category=entertainment" /> */}
        </Routes>
      </Router>
    </div >
  );
}

export default App;
