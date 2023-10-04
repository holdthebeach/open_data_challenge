import Card from './components/Card'
import { useDashboardContext } from './Context';
import './App.css'
import openDataLogo from './assets/icon.svg'

function App() {
  //move to Context.js file
  const {ministriesData} = useDashboardContext();

  const handler = () => {
    return null;
  }

  handler()

  if(ministriesData.length === 0){
    return;
  }

  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={openDataLogo} className="logo" alt="Open Data App logo" />
        </a>
      </div>
      <h1>Open Data App</h1>
      <div>
        {ministriesData.map((ministry, index) => (
          <Card>{ministry}</Card>
        ))}
      </div>
    </>
  )
}

export default App
