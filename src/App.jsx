import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
// import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RenderCommunity from './components/RenderCommunity'
import RenderUserControl from './components/RenderUserControl'
function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          {user && user._id ? (
            <Route path="/community" element={<RenderCommunity />} />
          ) : (
            <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
          )}
          <Route path="/community" element={<RenderCommunity />} />
          <Route path="/user-control" element={<RenderUserControl />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
