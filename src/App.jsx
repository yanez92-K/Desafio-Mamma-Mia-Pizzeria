import './App.css'
import Menubar from './Components/MenuBar/MenuBar'
import Home from './Views/Home'
import Footer from './Components/Footer/Footer'



function App() {

  return (
    <>
      <div className="contenedor">
        <Menubar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App
