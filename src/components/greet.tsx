type GreetProps = {
    name:string
    messageCount:number
    isLoggedin: boolean
}

function Greet(props:GreetProps) {
  return (
    <div>
       {props.isLoggedin? <h2>Welcome {props.name}  to typescript demo {props.messageCount}</h2>: 'Welcome Guest'} 
       
       </div>
  )
}

export default Greet