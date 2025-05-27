import { useState } from "react";

function User(){

    let[user,setUsers]=useState([]);

    async function getAllUsers(){
        let response=await fetch('https://dummyjson.com/users');
        let result=await response.json();
        setUsers(result.users);

        console.log(user);

    };

    


    return(
        
        <>

        </>
    );
}
export default User;