import './App.css';
import EditProfile from './Components/Popups/EditProfile';
import Register from './Register';
import Login from './Login';
import { Routes, Route } from "react-router-dom";
import Feed from './Components/User/Feed';
import CompanyRegister from './CompanyRegister';
import { AuthProvider } from './Components/Auth';
import UserDashboard from './Components/UserDashboard';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Register />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/register/company" element={<CompanyRegister />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/user" element={ <UserDashboard /> }>
            <Route path="/user/editprofile" element={<EditProfile />}></Route>
            <Route path="/user/feed" element={<Feed />}></Route>
          </Route>
          
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
