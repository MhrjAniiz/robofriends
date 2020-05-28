import React from 'react';


const Card = (props) =>{
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadows-5">
            <img alt="robots" src={`https://robohash.org/${props.id}`}/>
            <div>
                <p>{props.name}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;