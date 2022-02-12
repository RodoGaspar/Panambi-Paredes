import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/Navibar/NaviBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import Contador from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NaviBar/>
      <ItemListContainer title= 'Bienvenidos a la Tienda de Panambi'/>
      <Contador stock={9} initial={0}/>
    </div>
  );
}

export default App;
