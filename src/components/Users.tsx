import {useState} from 'react'

type AuthUser={
    email:string,
    password:string
}

function Users() {
    const [user,setUser]=useState<AuthUser|null>(null);
    setUser({
       email:'Papa Kow Dadson',
       password:'ato90'
    });
  return (
    <div>Users
        <div>Username is {user?.email}</div>
        <div>Password is {user?.password}</div>
    </div>
  )
}

export default Users