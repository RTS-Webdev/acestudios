import Navbar from './_components/Navbar';
import Carousel from './_components/Carousel';
import Footer from './_components/Footer';
import Movies from './_components/Movies';
import { About } from './_content/About';
import { Team } from './_content/Team';
import { Slides } from './_constants';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar setFooterHidden={() => {}} />
      <div className="flex-grow">
        <Carousel slides={Slides} />
        <Movies />
        <About />
        <Team />
      </div>
      <Footer hidden={false} />
    </div>
  );
}

export default App;