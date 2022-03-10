import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import StudentLogin from "./pages/studentLogin/StudentLogin";
import ProfilePage from "./pages/profilepage/ProfilePage";
import EmployeeLogin from "./pages/employeeLogin/EmployeeLogin";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import StudentRegister from "./pages/studentRegister/StudentRegister";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/student-login"
          element={user ? <ProfilePage /> : <StudentLogin />}
        />
        <Route
          path="/employee-login"
          element={user ? <Home /> : <EmployeeLogin />}
        />
        <Route path="/admin-login" element={user ? <Home /> : <AdminLogin />} />
        <Route path="/student-register" element={<StudentRegister />} />
        {/* //<Route path="/student/:id" element={<ProfilePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
