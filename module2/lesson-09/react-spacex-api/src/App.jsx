import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [rockets, setRockets] = useState([]);

  useEffect(()=>{
    fetch("https://api.spacexdata.com/v4/launches")
    .then((response) => { 
      return response.json();
    })
    .then(data => setRockets(data))
    .catch(err => console.log(err))

  }, [])
  return (
    <div className="App">
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
