import Elem from "./Elem";

const List = ({data}) => {
    return (
        <div className="list">
            {data.map(prod => (
                <div className="box" key={prod.id}>
                    <Elem post={prod}></Elem>
                </div>
            ))}
        </div>
    )
}
export default List