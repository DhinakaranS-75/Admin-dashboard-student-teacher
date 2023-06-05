
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import BUttons from './components/BUttons';
import Cards from './components/Cards';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Forgot_Password from './components/pages/Forgot_Password';
import Page_Error from './components/pages/Page_Error';
import Blank from './components/pages/Blank';
import Charts from './components/Charts';
import Table from './components/Table';
import Color from './components/utilites/Color';
import Border from './components/utilites/Border';
import Animation from './components/utilites/Animation';
import Other from './components/utilites/Other';
import Home from './components/CRUD/Home';





function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/buttons" element={<BUttons />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/colors" element={<Color />} />
        <Route path="/borders" element={<Border />} />
        <Route path="/animations" element={<Animation />} />
        <Route path="/Other" element={<Other />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot_Password />} />
        <Route path="/404" element={<Page_Error />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="/chart" element={<Charts />} />
        <Route path="/table" element={<Table />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
