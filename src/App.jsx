import './App.css';
import Navbar from './components/navbar/Navbar';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import WhatsappBtn from './components/whatsappBtn/WhatsappBtn';
import CategoriesContainer from './components/categories/CategoriesContainer';
import Locations from './components/locations/Locations';
// import Bolsas from './components/products/Bolsas';
// import Ladrillos from './components/products/Ladrillos';


function App() {

  return (
    <>
      <Navbar />
      <EmblaCarousel />
      <WhatsappBtn />
      <CategoriesContainer />
      <Locations />
      {/* <Bolsas /> */}
      {/* <Ladrillos /> */}
    </>
  )
}

export default App
