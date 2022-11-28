const Elem = ({post}) => {
    return (
        <div className="elem">
            <h2>{post.title}</h2>
            <p>{post.price}</p>
            <p>{post.description}</p>
        </div>
    )
}
export default Elem