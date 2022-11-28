import OneData from "./OnaData";

const ListData = ({data}) => {
    return ( 
        <span>
            {data.map(block => (
                <OneData elem={block}/>
            ))}
        </span>
     );
}
 
export default ListData;