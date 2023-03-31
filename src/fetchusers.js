import { useEffect , useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function Fetchusers() {

    const [data, SetData] = useState([])
    const navigate = useNavigate();
    useEffect(() => { axios.get('http://localhost:9011/api/user/getall').then(res => SetData(res.data)).catch(err => console.log(err)) }, [])

    const handleDelete = (id) => {

        const confirm = window.confirm("Would you like to Delete ?");
        if (confirm) {

            axios.delete('http://localhost:9011/api/user/delete/' + id).then(res => { window.location.reload(true); }).catch(err => console.log(err));
        
        }

    }


    return (

        <div className="table-wrapper" >

            <h3 className="center">User List</h3>

            <table className="fl-table" >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">ROLE</th>
                        <th scope="col">SUBJECT</th>
                        <th scope="col">ACTION</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( user => 


                            <tr key={user.id}>

                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.subject}</td>
                                <td>
                                    <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${user.id}`} > Update </Link>
                                    <button onClick={e => handleDelete(user.id)} className= 'btn btn-sm btn-success'>Delete</button>   

                                    </td>
                                </tr>

                        


                   ) }

                </tbody>
            </table>



        </div>





    )

}
export default Fetchusers;