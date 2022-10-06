import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Cards from './Components/Cards';
import infoTarjetas from './db';

function App() {
  return (
    <div >
      <NavBar/>
      <Header/>
      {infoTarjetas.map(tarjetas =>{
        <Cards tarjeta={tarjetas} img={infoTarjetas.img}/>
      })}



    </div>
  
)}

export default App;
