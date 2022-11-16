import React from "react";
import { ReactDOM} from "react";

export default function Entry(props){
    return(
        <div className="entry">
            <img src={props.img}/>
            <div className="info">
                <div className="maps">
                    <div className="loci">
                        <img src="./assets/geo.png"/>
                        <p>{props.country.toUpperCase()}</p>
                        <a href={props.link}>View on Google Maps</a>
                    </div>
                </div>
                <p className="lociName">{props.location}</p>
                <p className="date">{props.date}</p>
                <p className="lociDesc">{props.description}</p>
            </div>
             
        </div>
    )
}