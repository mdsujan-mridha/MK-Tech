import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
       <Header/>
       <Routes>
       <Route path='/' element={<Home></Home>}></Route>
         <Route path='home' element={<Home></Home>}></Route>
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
