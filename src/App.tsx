import Carousel from "./_components/Carousel";
import Footer from "./_components/Footer";
import { Slides } from "./_constants";
import { AlertDemo } from "./_components/Notification";

function App() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <AlertDemo />
      <div className="flex-grow">
        <Carousel slides={Slides} />
      </div>
      <Footer />
    </div>
  );
}

export default App;