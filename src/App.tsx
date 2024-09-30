import Carousel from "./_components/Carousel"
import Footer from "./_components/Footer"
import { slides } from "./_constants"
import { AlertDemo } from "./_components/Notification"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AlertDemo />
      <div className="flex-grow">
        <Carousel slides={slides} />
      </div>
      <Footer />
    </div>
  )
}

export default App