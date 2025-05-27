import { useEffect, useState } from "react";

function User(){

    let[data,setData]=useState([]);

    async function getAllUsers(){
        let response=await fetch('https://dummyjson.com/users');
        let result=await response.json();
        console.log(result.users);
         setData(result.users);
    

    };

  

    useEffect(()=>{

        getAllUsers();
       
        
    },[]);


    return(
        
        <>

        </>
    );
}
export default User;