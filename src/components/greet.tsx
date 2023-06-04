type GreetProps = {
    name:string
}

function Greet(props:GreetProps) {
  return (
    <div>
        <h2>Welcome {props.name}  to typescript demo</h2></div>
  )
}

export default Greet