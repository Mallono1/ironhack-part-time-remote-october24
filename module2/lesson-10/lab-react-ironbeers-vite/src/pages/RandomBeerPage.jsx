import { useState, useEffect } from 'react';

function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(()=>{
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => response.json())
        .then(data => setRandomBeer(data))
        .catch(err => console.log(err))
    }, [])

    if(!randomBeer.name){
        return <p>Loading...</p>
    }

    return (
    <div>
        <img src={randomBeer.image_url} width={'100px'} height={'100px'}/>
        <h2>{randomBeer.name}</h2>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.description}</p>
        <p>Created by {randomBeer.contributed_by}</p>
    </div>)
}

export default RandomBeerPage;
