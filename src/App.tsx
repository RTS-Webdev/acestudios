import Carousel from "./_components/Carousel";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { Slides } from "./_constants";

function App() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar />
      <div className="flex-grow">
        <Carousel slides={Slides} />
      </div>
      <Footer />
    </div>
  );
}

export default App;