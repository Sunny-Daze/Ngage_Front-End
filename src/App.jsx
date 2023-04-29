import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RenderCommunity from './components/RenderCommunity'
import RenderUserControl from './components/RenderUserControl'
import RenderStore from './components/RenderStore'
import RenderRecreation from './components/RenderRecreation'
import RenderLearningManagement from './components/RenderLearningManagement'
import RenderProfessionalGrowth from './components/RenderProfessionalGrowth'
import RenderComments from './components/RenderComments'
import RenderUserProfile from './components/RenderUserProfile'
import RenderLearningCourse from './components/RenderLearningCourse'
import RenderAdminControl from './components/RenderAdminControl'
import RenderRecreationActivity from './components/RenderRecreationActivity'
import RenderProject from './components/RenderProject'
import RenderTaskInfo from './components/RenderTaskInfo'

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          {/* {user && user._id ? (
            <Route path="/community" element={<RenderCommunity />} />
          ) : (
            <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
          )} */}
          <Route path="/community" element={<RenderCommunity />} />
          <Route path="/management/user-control" element={<RenderUserControl />} />
          <Route path="/management/admin-control" element={<RenderAdminControl />} />
          <Route path="/store" element={<RenderStore />} />
          <Route path="/recreation" element={<RenderRecreation />} />
          <Route path="/training/learning-management" element={<RenderLearningManagement />} />
          <Route path="/training/professional-growth" element={<RenderProfessionalGrowth />} />
          <Route path="/community/comments/:id" element={<RenderComments />} />
          <Route path="/user-profile" element={<RenderUserProfile />} />
          <Route path="/training/learning-management/course" element={<RenderLearningCourse />} />
          <Route path="/recreation/activity/:id" element={<RenderRecreationActivity />} />
          <Route path="/project/:id" element={<RenderProject />} />
          <Route path="/project/task/:id" element={<RenderTaskInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
