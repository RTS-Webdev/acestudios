import Carousel from "./_components/Carousel"
import Footer from "./_components/Footer"
import { slides } from "./_constants"

function App() {
  return (
    <>
      <Carousel slides={slides} />
      <footer className="bottom-0 left-0 right-0 fixed mt-10">
        <Footer />
      </footer>
    </>
  )
}

export default App