import './App.css';
import EditProfile from './Components/Popups/EditProfile';
import Register from './Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/user" element={ <EditProfile /> }>
          <Route path="/user/profile" element={<EditProfile />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
