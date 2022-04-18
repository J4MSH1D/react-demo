import Navbar from './components/Navbar'
import Router from './routes/Router'


function App() {
  return (
    <div className="App overflow-x-hidden relative w-screen text-white min-h-screen bg-gray-700">
      <Navbar />
      <Router />
    </div>
  )
}

export default App
