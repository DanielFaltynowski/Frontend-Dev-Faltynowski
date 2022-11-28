import FancyTable from "./FancyTable";
const Multiple = ({name, number}) => {
    return ( 
        <blockquote>
            <h2>{name}</h2>
            <FancyTable n={number}></FancyTable>
        </blockquote>
     );
}
 
export default Multiple;