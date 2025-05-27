import { useEffect, useState } from "react";

function User(){

    let[data,setData]=useState([]);

    async function getAllUsers(){
        let response=await fetch('https://dummyjson.com/users');
        let result=await response.json();
        setData(result.data);

    };

    //console.log(data);

    useEffect(()=>{

        getAllUsers();
        console.log(data);

    },[])


    return(
        
        <>

        </>
    );
}
export default User;