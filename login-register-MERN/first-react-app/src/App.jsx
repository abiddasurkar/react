import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './Component/Login';
import Layout from './Component/Layout';
import Register from './Component/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Login/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/home" element={ <Layout/> } />
        <Route path="/register" element={ <Register/> } />
      </Routes>
    </div>
  );
}

export default App;
