import './ServiceCard.css';

function ServiceCard(props){
    return (
        <div className='service-container'>
            <img src={props.url} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default ServiceCard;