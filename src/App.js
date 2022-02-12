import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title= 'Bienvenidos a la Tienda de Panambi'/>
    </div>
  );
}

export default App;
