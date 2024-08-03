import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/navbar';
import Hero from './Components/Hero';
import Footer from './Components/footer';
import Componet1 from './componet1';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SearchBar/> */}
      <Componet1/>
      <Hero/>
       <Footer/>
     
    </div>
  );
}

export default App;
