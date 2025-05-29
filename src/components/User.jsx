import { useEffect, useState } from "react";

function User(){


    function funClick(event){

        event.preventDefault();

        let x=parseInt(event.target.textContent);
        var lm=0;
        var sk=0;

        if(x===1){
            lm=10,
            sk=0,
            getAllUsers(lm,sk);
        }
        else if(x===2){
            lm=10,
            sk=10,
            getAllUsers(lm,sk);
        }
        else if(x===3){
            lm=10,
            sk=20,
            getAllUsers(lm,sk);
        }
        else{
            lm=10,
            sk=0,
            getAllUsers(lm,sk);
        }
    };



    let[data,setData]=useState([]);

    async function getAllUsers(lm,sk){
        let response=await fetch('https://dummyjson.com/users?limit='+lm+'&skip='+sk);
        let result=await response.json();
        console.log(result.users);
         setData(result.users);
    

    };


    useEffect(()=>{

        getAllUsers(10,0);
       
        
    },[]);

    function handleDeleteRow(id){

        setData(data.filter(User=>User.id!=id));



    }

    function handleSubmit(event){

        event.preventDefault();

    }


    return(
        
        <>
        
        <table border='1'>
            <tr>
                <td>Id</td>
                <td>LastName</td>
                <td>FirstName</td>
                <td>MaidenName</td>
                <td>Age</td>
                <td>Gender</td>
                <td>BloodGroup</td>
            </tr>
            {
                data.map((x)=>{
                    return(<tr key={x.id}>

                        <td>{x.id}</td>
                        <td>{x.lastName}</td>
                        <td>{x.firstName}</td>
                        <td>{x.maidenName}</td>
                        <td>{x.age}</td>
                        <td>{x.gender}</td>
                        <td>{x.bloodGroup}</td>
                        <td onClick={()=>handleDeleteRow(x.id)}>Remove</td>

                    </tr>)
                })
            }
        </table>
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Enter LastName" />
            </div>
            <div>
                <input type="text" placeholder="Enter FirstName" />
            </div>
            <div>
                <input type="text" placeholder="Enter MaidenName " />
            </div>
            <div>
                <input type="number" placeholder="Enter Age" />
            </div>
            <div>
                <input type="text" placeholder="Enter Gender" />
            </div>
            <div>
                <input type="text" placeholder="Enter BloodGroup" />
            </div>
            <button type="submit">Submit</button>

        </form>
        <hr></hr>
        <h3>Pagination</h3>
        <ul onClick={funClick}>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
        </ul>

        </>
    );
}
export default User;