const FancyTable = ({n}) => {
    return ( 
        <ol>
            {Array.from(Array(n).keys()).map(point => (
                <li></li>
            ))}
        </ol>
     );
}
 
export default FancyTable;