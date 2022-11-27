import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button =({data})=>{
    const className = `btn btn-outline-${data.functional} ${data.class}`;
    return(
        <button className={className} type={data.type||'button'} onClick={data.eventFunc}>
            {data.text? <span>{data.text}</span>: null}
            {data.icon? <FontAwesomeIcon icon={data.icon} />: null}
        </button>
    )
}
export default Button