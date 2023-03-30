import React from "react";

export default function Cards(props){
    const cards = props.data.map((card, index) => {
        return (
            <main className="card" key={index}>
                    <img className="card--photo" src={card.imageUrl} alt="destination photo" />
                    <div className="card-right-side">
                        <div className="loc-maps">
                            <img className="location-icon" src="location-icon.png" alt="location icon" />
                            <h3 className="card--location">{card.location}</h3>
                            <a className="card-maps-link" href={card.googleMapsUrl}>View on Google Maps</a>
                        </div>    
                        <h1 className="card-title">{card.title}</h1>
                        <p className="card-date">{card.startDate} - {card.endDate}</p>
                        <p className="card-description">{card.description}</p>
                    </div>

            </main>
        )
    })
    
    
    return cards   
}