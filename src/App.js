import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/home';
import Services from './components/Services/services';
import Login from './components/Login/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
