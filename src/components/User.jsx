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
        <table>
            <tr>
                <td>Id</td>
                <td>FirstName</td>
                <td>LastName</td>
                <td>MaidenName</td>
                <td>Age</td>
                <td>Gender</td>
                <td>BloodGroup</td>
            </tr>
            {
                data.map((x)=>{
                    return(<tr key={x.id}>

                    </tr>)
                })
            }
        </table>

        </>
    );
}
export default User;