import React, {useContext} from "react"
import Card from './components/Card'
import { Context } from './Context';
import './App.css'
import openDataLogo from './assets/icon.svg'

function App() {
  //move to Context.js file
  const {items, setItems} = useContext(Context);

  const handler = () => {
    return null;
  }

  handler()

  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={openDataLogo} className="logo" alt="Open Data App logo" />
        </a>
      </div>
      <h1>Open Data App</h1>
      <div>
        <Card></Card>
      </div>
    </>
  )
}

export default App
