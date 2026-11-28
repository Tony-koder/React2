import { useState } from 'react'
import Clicker from './components/Clicker'
import CatFacts from './components/CatFacts'
import Users from './components/Users'
import './App.css'

function App() {
 return (
  <>
  <Clicker clicker = {Clicker}/>
  <CatFacts></CatFacts>
  <Users></Users>
  </>
 )
  
}

export default App
