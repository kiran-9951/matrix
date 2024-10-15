import './App.css';
import DappSection from './components/dragbox';
import AboutEthAi from './components/features';
import Footer from './components/footerpage';
import Navbar from './components/Navbar';
import Question from './components/questions';
import Roadmaps from './components/Roadmap';
import Container from './components/secondcontainer';
import Tokenomics from './components/tokenomics';

function App() {
  return (
    <div>
      <Navbar/>
      <Container/>
      <AboutEthAi/>
      <Tokenomics/>
      <Roadmaps/>
      <Question/>
      <DappSection/>
      <Footer/>
    </div>
  );
}

export default App;
