import {useState} from "react";
import {Link} from "react-router-dom";

const RandomPhoto = ({photo, changeLeft, changeRight}) => {
    const [clicked, setClicked] = useState(false)
    const newRate = () => {
        fetch(`http://localhost:8000/data/${photo.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                rate: photo.rate + 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        setClicked(true)
    }
    return (
        <div className="randomPhoto">
            <h2>{photo.author}</h2>
            <div className="rateBox">
                <img src={photo.url} alt=""/>
                <div className="rate">
                    {!clicked && (
                        <div className="button2">
                            <button onClick={newRate} disabled={clicked}>&#11088;</button>
                            <div className="mean">{photo.rate}</div>
                        </div>
                    )}
                    {clicked && <div className="clickedMean">{photo.rate + 1}</div>}
                </div>
                <div className="next">
                    {photo.id !== 1 && <Link><button onClick={changeLeft}>&#8592;</button></Link>}
                    {photo.id !== 5 && <Link><button onClick={changeRight}>&#8594;</button></Link>}
                </div>
            </div>
        </div>
    )
}
export default RandomPhoto