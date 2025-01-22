import { useState } from "react";
import { useNavigate } from "react-router";

function AddBeerPage() {
    const [beerName, setBeerName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        const newBeer = {
            name: beerName,
            description: description,
            tagline: tagline,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }

        console.log('newBeer', newBeer)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBeer)
        };

        fetch('https://ih-beers-api2.herokuapp.com/beers/new', requestOptions)
        .then(response => response.json())
        .then(() => navigate('/beers'))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Add Beer Page</h1>

            <form onSubmit={handleSubmit}>
                <input name="name" type="text" value={beerName} onChange={(e)=> setBeerName(e.target.value)} />
                <br/>
                <input name="tagline" type="text" value={tagline} onChange={(e)=> setTagline(e.target.value)} />
                <br/>
                <textarea name="description" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                <br/>
                <input name="first_brewed" type="text" value={firstBrewed} onChange={(e)=> setFirstBrewed(e.target.value)}/>
                <br/>
                <input name="brewers_tips" type="text" value={brewersTips} onChange={(e)=>setBrewersTips(e.target.value)} />
                <br/>
                <input name="attenuation_level" type="number" value={attenuationLevel} onChange={(e)=> setAttenuationLevel(Number(e.target.value))}/>
                <br/>
                <input name="contributed_by" type="text"value={contributedBy} onChange={(e)=> setContributedBy(e.target.value)}/>
                <br/>
                <button type="submit">Add New Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
