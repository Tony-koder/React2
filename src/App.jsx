import { useState } from 'react'
import Clicker from './components/clicker'
import CatFacts from './components/CatFacts'
import './App.css'

function App() {
 return (
  <>
  <Clicker clicker = {Clicker}/>
  <CatFacts></CatFacts>
  </>
 )
  
}

export default App
