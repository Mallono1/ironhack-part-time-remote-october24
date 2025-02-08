import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';

function BeerDetailsPage() {
    const { beerId } = useParams();
    console.log('beerId', beerId)
   
    const [beer, setBeer] = useState({});

    useEffect(()=>{
      async function fetchSingleBeer(){
        try {
                const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
                const data = response.json();
                setBeer(data)
        } catch (error) {
                console.log(error)
        }
      }
      fetchSingleBeer()
    }, [])

    if(beer.name === undefined){
        return <p>Loading...</p>
     } 

    return (<div>
                <img src={beer.image_url} width={'100px'} height={'100px'}/>
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>Created by {beer.contributed_by}</p>
            </div>)

}

export default BeerDetailsPage;
