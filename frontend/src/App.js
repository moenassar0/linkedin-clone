import './App.css';
import EditProfile from './Components/Popups/EditProfile';
import Register from './Register';
import Login from './Login';
import { Routes, Route } from "react-router-dom";
import Feed from './Components/User/Feed';
import CompanyRegister from './CompanyRegister';
import { AuthProvider } from './Components/Auth';
import UserDashboard from './Components/UserDashboard';
import CompanyDashboard from './Components/CompanyDashboard';
import CompanyHome from './Components/CompanyHome';
import CompanyFeed from './Components/User/CompanyFeed';
import Profile from './Components/User/Profile';

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
            <Route path="/user/profile" element={<Profile />}></Route>
            <Route path="/user/feed" element={<Feed />}></Route>
            <Route path="/user/companies" element={<CompanyFeed />}></Route>
          </Route>

          <Route path="/company" element={ <CompanyDashboard /> }>
            <Route path="/company/home" element={<CompanyHome />}></Route>
          </Route>
          
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
