import './App.css';
import EditProfile from './Components/Popups/EditProfile';
import Register from './Register';
import Login from './Login';
import { Routes, Route } from "react-router-dom";
import Feed from './Components/User/Feed';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={ <EditProfile /> }>
          <Route path="/user/profile" element={<EditProfile />}></Route>
        </Route>
        <Route path="/feed" element={<Feed />}></Route>
      </Routes>
    </div>
  );
}

export default App;
