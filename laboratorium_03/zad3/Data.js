const Data = () => {
    const data = {
        image: "https://i.ytimg.com/vi/kHjzuqq3b44/maxresdefault.jpg",
        cardTitle: "Bob Dylan",
        cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
        button: {
          url: "https://en.wikipedia.org/wiki/Bob_Dylan",
          label: "Go to wikipedia"
        }
    };
    return (
        <div className="content">
            <img src={data.image} alt="" />
            <div className="body">
                <h5>{data.cardTitle}</h5>
                <p>{data.cardDescription}</p>
                <a href={data.button.url}>{data.button.label}</a>
            </div>
        </div>
    );
}
 
export default Data;