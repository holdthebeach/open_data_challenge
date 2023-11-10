import Card from './components/Card/Card'
import Button from './components/Button/Button'
import { useDashboardContext } from './Context'
import './App.scss'
import openDataLogo from './assets/icon.svg'

function App() {
  //move to Context.js file
  const {ministriesData, showSort} = useDashboardContext();

  const sortDescending = () => {
    //needed to make a copy of the ministries data because React uses the concept of immutabilty
    //may not register the state update correctly without making a copy
    const ministries = [...ministriesData];
    const sortedMinistries = ministries.sort((a,b) => (b.datasets - a.datasets))
    
    showSort(sortedMinistries)
    return sortedMinistries
  }

  const sortAscending = () => {
    const ministries = [...ministriesData];
    const sortedMinistries = ministries.sort((a,b) => (a.datasets - b.datasets))
    
    showSort(sortedMinistries)
    return sortedMinistries
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
      <div className="buttons">
        <Button text="Sort Descending" handler={sortDescending} ariaText="sort descending"></Button>
        <Button text="Sort Ascending" handler={sortAscending} ariaText="sort-ascending"></Button>
      </div>
      <div className="grid">
        {ministriesData.map((ministry, index) => (
          <Card key={index} data={ministry}></Card>
        ))}
      </div>
    </>
  )
}

export default App
