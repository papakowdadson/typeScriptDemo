type personListProps={
    names:{
        first:string,
        last:string
    }[]
}

function PersonList(props:personListProps) {
  return (
    <div>
        {props.names.map((name)=>{
         return <h2 key={name.last}>{name.first}</h2>})
         }
        
        
        
    
    
    </div>
  )
}

export default PersonList