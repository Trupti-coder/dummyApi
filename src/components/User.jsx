import { useEffect, useState } from "react";

function User(){


    function funClick(event){

        event.preventDefault();

        let x=parseInt(event.target.textContent);
    }

    let[data,setData]=useState([]);

    async function getAllUsers(){
        let response=await fetch('https://dummyjson.com/users?limit='+lm+'&skip='+sk);
        let result=await response.json();
        console.log(result.users);
         setData(result.users);
    

    };


    useEffect(()=>{

        getAllUsers();
       
        
    },[]);

    function handleDeleteRow(id){

        setData(data.filter(User=>User.id!=id));



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
        <h3>Pagination</h3>
        <ul onClick={funClick}>
            <li><a href="">First List</a></li>
            <li><a href="">Second List</a></li>
            <li><a href="">Third List</a></li>
        </ul>

        </>
    );
}
export default User;