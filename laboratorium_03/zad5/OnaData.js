const OneData = ({elem}) => {
    return ( 
        <blockquote>
            <img src={elem.image} alt="" />
            <div className="card-body">
                <h5>{elem.cardTitle}</h5>
                <p>{elem.cardDescription}</p>
                <a href={elem.button.url}>{elem.button.label}</a>
            </div>
        </blockquote>
     );
}
 
export default OneData;