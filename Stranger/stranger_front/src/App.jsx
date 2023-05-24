import Container from "./components/container/Container"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import { useState } from "react"

function App() {

  
  const [logingIn , setLoginIn] = useState(false)
  const [SigningUp , setSigningUp] = useState(false)


  return (
    <>
      <Navbar loginBtnHandle={ () => setLoginIn(true) } signupBtnHandle={() => setSigningUp(true)}/>
      <Container />
      <Footer />
      <Login on={logingIn} closeBtnhandle={() => setLoginIn(false)} />
      <Signup on={SigningUp} closeBtnhandle={() => setSigningUp(false)}  />
    </>
  )
}

export default App
