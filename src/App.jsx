import './css/App.css';
import Favorite from './pages/Favorite'
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar'
import { AuthProvider } from './contexts/AuthContext';
import Footer from './components/Footer';

function App() {


  return (
    <AuthProvider>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorite />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </main>
        <Footer />
      </MovieProvider>
    </AuthProvider>
  )
}

export default App
