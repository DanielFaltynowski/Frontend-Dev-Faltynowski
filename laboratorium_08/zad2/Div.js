import {useParams, useSearchParams} from "react-router-dom";

const Div = () => {
    const [params, setParams] = useSearchParams()
    const x = params.get('x')
    const y = params.get('y')
    const op = (x, y) => +x / +y;
    return (
        <div>{x} / {y} = {op(x, y)}</div>
    )
}
export default Div