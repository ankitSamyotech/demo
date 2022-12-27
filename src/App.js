import './App.css';
import Footer from './componets/Footer/Footer';
import Hero from './componets/Hero/hero';
import Join from './componets/Join/Join';
import Plans from './componets/Plans/Plans';
import Program from './componets/Programs/Program';
import Reasons from './componets/Reasons/Reasons';
import Tesimonials from './componets/Tesimonials/Tesimonials';
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Tesimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
