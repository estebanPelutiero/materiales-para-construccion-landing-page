import './App.css';
import Navbar from './components/navbar/Navbar';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import WhatsappBtn from './components/whatsappBtn/WhatsappBtn';
import CategoriesContainer from './components/categories/CategoriesContainer';
import Location from './components/locations/Location';
import Contact from './components/form/Contact';
import Footer from './components/footer/Footer';



function App() {

  return (
    <>
      <Navbar />
      <EmblaCarousel />
      <WhatsappBtn />
      <CategoriesContainer />
      <Location />
      <Contact />
      <Footer />
    </>
  )
}

export default App
