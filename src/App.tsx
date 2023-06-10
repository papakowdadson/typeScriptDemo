import Button from "./components/Button";
import Input from "./components/Input";
import PersonList from "./components/PersonList";
import { Status } from "./components/Status";
import Users from "./components/Users";
import Greet from "./components/greet";
import Person from "./components/person";

function App() {
 const Name={
  first:'You',
  last:"Mee"
 }
 const nameList=[{
  first:'You',
  last:"Meee"
 },{
  first:'Yous',
  last:"Meeeee"
 },{
  first:'Youss',
  last:"Meeeeee"
 }];

//  const handleClick=(event,id)=>{
//   console.log('clicked',event);
//  }

  return (
    <div className="App">
     <Greet name='Dadson' messageCount={2} isLoggedin={false}/>
     <Person name={Name} /> 
     <PersonList names={nameList} />
     <Status status="loading"/> 
     <Button handleClick={(event,id)=>{console.log('clicked',event,id)}}/>
     <Input value="" handleChange={(event)=>console.log(event)}/>
     <Users/>
    </div>
  );
}

export default App;
