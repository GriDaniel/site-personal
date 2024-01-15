import { useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'



function App() {
 
  const [count, setCount] = useState(0);

  const [darkMode, setDarkMode] = useState(false);


  
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('color-theme', newMode ? 'dark' : 'light');
  };


  useState(() => {
    const storedTheme = localStorage.getItem('color-theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);



  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About darkMode={darkMode} />
      <Experience />
      <Projects />
      <Contact/>
    </>
  )
}

export default App
