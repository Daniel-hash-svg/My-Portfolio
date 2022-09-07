import Header from "./components/Header";
import About from "./components/About";
import Knowledge from "./components/Knowledge";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  
  return (
    <div>
      <div>
        <Header  />
        <About />
        <Knowledge  classname={'wrapperKnowledge'}/>
        <Portfolio  classname={'portfolio'}/>
        <Contact  classname={'wrapperContact'}/>
        <Footer />
      </div>
    </div>
  );
} 

export default App;
