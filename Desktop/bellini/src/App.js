import logo from "./logo.svg";
import Navbar from "./component/navbar";
import Slideshow from "./component/About";
import Info from "./component/info";
import Reservation from "./component/Reservation";
import Gall from "./component/Reservation";
import Footer from "./component/footer";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <>
        {/* <Navbar /> */}
        <Slideshow/>


        
      </>
      <Info/>
    <Footer/>
     
      
    </div>
  );
}

export default App;
