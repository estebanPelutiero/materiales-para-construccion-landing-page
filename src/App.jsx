import './App.css';
import Navbar from './components/navbar/Navbar';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import WhatsappBtn from './components/whatsappBtn/WhatsappBtn';
import CategoriesContainer from './components/categories/CategoriesContainer';
import Location from './components/locations/Location';
import Contact from './components/form/Contact';
// import Bolsas from './components/products/Bolsas';
// import Ladrillos from './components/products/Ladrillos';


function App() {

  return (
    <>
      <Navbar />
      <EmblaCarousel />
      <WhatsappBtn />
      <CategoriesContainer />
      <Location />
      <Contact />
      {/* <Bolsas /> */}
      {/* <Ladrillos /> */}
    </>
  )
}

export default App
