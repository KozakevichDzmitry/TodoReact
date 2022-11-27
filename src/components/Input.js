const Input=({data})=>{
    return(
        <input className={'form-control ' + data.class} type={data.type} placeholder={data.placeholder} value={data.value} onChange={data.onChange}/>
    )
}
export default Input