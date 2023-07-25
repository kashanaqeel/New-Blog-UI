import './App.css';
import Navbar from './components/Navbar/Navbar';
import Top from './pages/Top'


// import Admin_Dashboard from './pages/Admin_Dashboard';
  import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

          <Navbar/>

           <Top/> <br />
           <br />
         

          <Home/>

          <Footer/>
          


      {/* <Home/> */}

      {/* <Admin_Dashboard /> */}


    </div>
  );
}

export default App;
