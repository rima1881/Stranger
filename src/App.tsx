import Navbar from "./components/Navbar/Navbar"
import Up from "./components/Up/Up"
import Games from "./components/Games/Games"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import style from "./App.module.css"
import Request from "./components/Request/Request"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Games />
      <img src="dog_simulator_wide.png" className={style.dog_sim} />
      <About />
      <div className={style.begging_gpt}></div>
      <Request />
      <Footer />

    </>
  )
}

export default App
