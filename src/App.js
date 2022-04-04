import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NaviBar} from './components/Navibar/NaviBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home/Home';
import {Footer} from './components/Footer/Footer';
import { Cart } from './components/Cart/Cart';
import { CustomContex } from './context/CustomContex';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';


function App() {
  return (
    <CustomContex>
      <BrowserRouter>
          <NaviBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </CustomContex>
  );
}

export default App;
