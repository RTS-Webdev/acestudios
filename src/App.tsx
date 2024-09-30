import Carousel from "./_components/Carousel"
import Footer from "./_components/Footer"
import { slides } from "./_constants"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Carousel slides={slides} />
      </div>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  )
}

export default App