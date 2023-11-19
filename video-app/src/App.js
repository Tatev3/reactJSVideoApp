import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home/Home';
function App() {
  return (
    <div>
     <div className="Inline">
     <Header />
     <Home />
     </div>
     <Footer />
    </div>
  );
}

export default App;
