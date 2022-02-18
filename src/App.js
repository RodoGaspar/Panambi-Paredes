import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/Navibar/NaviBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <NaviBar/>
      <ItemListContainer title= 'Bienvenidos a la Tienda de Panambi'/>
    </div>
  );
}

export default App;
