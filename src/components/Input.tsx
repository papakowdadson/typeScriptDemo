type inputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

function Input(props:inputProps) {
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }
  return (
    <input type="text" name="demoText" id="demoText" value={props.value}  onChange={props.handleChange}/>
  )
}

export default Input