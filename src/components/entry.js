import React from "react";
import { ReactDOM} from "react";

export default function Entry(props){
    return(
        <div className="entry">
            <img src={props.img}/>
            <div className="container">
                <div className="loci">
                    <img src="./assets/geo.png"/>
                    <p>{props.country.toUpperCase()}</p>
                    <a href={props.link}>View on Google Maps</a>
                </div>
                
                <h1>{props.location}</h1>
                <h5>{props.date}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}