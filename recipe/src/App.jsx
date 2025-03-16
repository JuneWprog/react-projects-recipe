import './index.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Favorite from './pages/favorite'
import Navbar from './components/navbar'
import Detail from './pages/details'


function App() {

  return (
    <div className="p-6 bg-white text-gray-600 text-lg w-screen h-screen overflow-x-hidden">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorite />} />
      <Route path="/recipe/:id" element={<Detail />} />
    </Routes>
      
     
    </div>
  )
}

export default App
