import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
function App() {
  const [isOpened, setIsOpened] = useState(true);
  return (
    <div className="App">
      <Header isOpened={isOpened} setIsOpened={setIsOpened} />
      <Sidebar isOpened={isOpened} setIsOpened={setIsOpened} />
      <div className="container">
        <main className="main">Content</main>
      </div>
      <Footer />
    </div>
  )
}

export default App
