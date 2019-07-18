
import React from 'react'

const Rating = ({count, onChangeRating}) => {
    let starsHtml = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            starsHtml.push(<span onClick={() => onChangeRating(i+1)} key={i}>
                <i  className="fa fa-star" aria-hidden="true"></i>
            </span>)
        }
        else {
            starsHtml.push(<span onClick={() => onChangeRating(i+1)} key={i}>
                <i  className="fa fa-star-o" aria-hidden="true"></i>
            </span>)
        }
    }
    return (
        <div>{starsHtml}</div>
    )
}

export default Rating