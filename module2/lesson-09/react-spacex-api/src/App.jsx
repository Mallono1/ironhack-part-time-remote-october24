import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [rockets, setRockets] = useState([]);
  const [trigger, setTrigger] = useState(0)

  useEffect(()=>{
    // setTimeout(()=>{
      fetch("https://api.spacexdata.com/v4/launches")
    .then((response) => { 
      return response.json();
    })
    .then(data => setRockets(data))
    .catch(err => console.log(err))
    // }, 2000)

  }, [])

  // useEffect(()=>{
  //   console.log('test', trigger)
  // }, [trigger, rockets])

  if(rockets.length === 0){
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <button onClick={()=> setTrigger(trigger+1)}>Trigger useEffect</button>

      {rockets.map(rocket => {
        return <div key={rocket.id}>
          <h2>{rocket.name}</h2>
          {rocket.links.patch.small && <img src={rocket.links.patch.small} width={'100px'} height={'100px'} />}
          {rocket.details && <p>{rocket.details}</p>}
        </div>
      })}
    </div>
  )
}

export default App
