
type personProp={
    name:{
        first:string,
        last:string
    }
}
function Person(props:personProp) {
  return (
    <div>{props.name.first}{props.name.last}</div>
  )
}

export default Person