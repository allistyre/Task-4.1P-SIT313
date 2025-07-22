import './App.css';
import './components/css/fonts.css'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardsSection from "./components/CardsSection";
import NewsletterSignup from "./components/NewsletterSignup";
import Footer from "./components/Footer";

function App() {
  return (
       <div>
           <Navbar />
           <Header />
           <CardsSection />
           <NewsletterSignup />
           <Footer />
       </div>
  );
}

export default App;
