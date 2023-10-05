import Card from './components/Card'
import { useDashboardContext } from './Context';
import './App.scss'
import openDataLogo from './assets/icon.svg'

function App() {
  //move to Context.js file
  const {ministriesData} = useDashboardContext();

  const sortDescending = () => {

    const ministries = ministriesData;
    const sortedMinistries = ministries.sort((a,b) => (a.datasets - b.datasets))
    
    return sortedMinistries;
  }

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
      <div className="grid">
        {ministriesData.map((ministry, index) => (
          <Card key={index}>{ministry}</Card>
        ))}
      </div>
    </>
  )
}

export default App
