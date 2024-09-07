import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Team from './pages/Team'
import './App.css'

function App() {
  return (
    <>
      <Router>
          <div className='app'>
              <Header/>
              <main>
                  <Routes>
                      <Route path='/' element={<Home/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='team/' element={<Team/>}/>
                      <Route path='/contact' element={<Contact/>}/>
                  </Routes>
              </main>
              <Footer/>
          </div>
      </Router>
    </>
  )
}

export default App;
