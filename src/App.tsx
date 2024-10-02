import { Route, Routes } from 'react-router-dom';
import { About } from './_content/About';
import { Team } from './_content/Team';
import { Slides } from './_constants';
import Store from './store/Store';
import Videos from './_components/Videos';
import Navbar from './_components/Navbar';
import Carousel from './_components/Carousel';
import Footer from './_components/Footer';
import Movies from './_components/Movies';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar setFooterHidden={() => {}} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/team" element={<Team />} />
        <Route path="/" element={
          <div className="flex-grow">
            <Carousel slides={Slides} />
            <div id="about">
              <About />
            </div>
            <div id="team">
              <Team />
            </div>
            <Movies />
          </div>
        } />
      </Routes>
      <Footer hidden={false} />
    </div>
  );
}

export default App;