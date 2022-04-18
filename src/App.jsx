import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Router from './routes/Router'


function App() {
  return (
    <div className="App overflow-x-hidden relative w-screen text-white min-h-screen bg-gray-700">
      <Navbar />
      <Router />
      <Footer />
    </div>
  )
}

export default App
