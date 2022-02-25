import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NaviBar} from './components/Navibar/NaviBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home/Home';
import {Footer} from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <NaviBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/categor:id' element={ItemListContainer}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
  
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
