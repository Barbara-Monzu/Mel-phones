
import React, { useState, useEffect } from 'react'
import './reviews.css'

const PersonalReview = ({ reviewOwner, rating, description }) => {

    const [starts, setStarts] = useState([])

    useEffect(() => {
        switch (rating) {
            case 1:
                setStarts([1]);
                break;
            case 2:
                setStarts([1, 2]);
                break;
            case 3:
                setStarts([1, 2, 3]);
                break;
            case 4:
                setStarts([1, 2, 3, 4]);
                break;
            case 5:
                setStarts([1, 2, 3, 4, 5]);
                break;
            default:
                setStarts([1, 2, 3]);
                break;
        }

    }, [])


    return (

        <div className="review">
        
            <strong className="mx-5"> {reviewOwner} </strong>
            {starts?.map((start, i) => <span key={i}> &#11088; </span>)}
            <br></br>
            "{description}"
            <br></br>

        </div>
    )
}

export default PersonalReview
