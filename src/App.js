import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import nenad from './image/nenad.jpg'


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Radi samo da znas.
        </p>
        <div><img src={nenad} className='nenad'/></div>
      </header>
     <p>Radi</p>
    </div>
  );
}

export default App;
