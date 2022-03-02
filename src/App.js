import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NaviBar} from './components/Navibar/NaviBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home/Home';
import {Footer} from './components/Footer/Footer';
import { Cart } from './components/Cart';
import { CustomContex } from './context/CustomContex';


function App() {
  return (
    <CustomContex>
      <BrowserRouter>
          <NaviBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/category/:id' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </CustomContex>
  );
}

export default App;
