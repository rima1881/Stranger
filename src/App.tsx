import Navbar from "./components/Navbar/Navbar"
import Games from "./components/Games/Games"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import style from "./App.module.css"
import Request from "./components/Request/Request"
import Footer from "./components/Footer/Footer"
import { useState , useEffect, ReactElement } from "react"




function App() {

  const [ratio,setRatio] = useState(0);

  useEffect(() =>{
    setRatio(window.innerWidth/window.innerHeight);
  },[])

  let Content : ReactElement;

  return (
    <>
      <Navbar />
      { ratio > 1 ? 
        Content = 
        <>
          <Header />
          <Games />
          <div className={style.dog_sim}></div>
          <About />
          <div className={style.begging_gpt}></div>
          <Request />
        </>
        :
        Content = 
        <>
          <Games />
        </>
    
      }
      <Footer />

    </>
  )
}

export default App
