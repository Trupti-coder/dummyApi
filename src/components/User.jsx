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

    function handleDeleteRow(id){

        

    }


    return(
        
        <>
        <table border='1'>
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

                        <td>{x.id}</td>
                        <td>{x.firstName}</td>
                        <td>{x.lastName}</td>
                        <td>{x.maidenName}</td>
                        <td>{x.age}</td>
                        <td>{x.gender}</td>
                        <td>{x.bloodGroup}</td>
                        <td onClick={()=>handleDeleteRow(x.id)}>Remove</td>

                    </tr>)
                })
            }
        </table>

        </>
    );
}
export default User;