import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";

 const ChildComponent=(props)=>{
    const {students,setSelectedStudent,deleteStudent}=props;

    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                
                    {students.map(student=> <tr>
                        <td>{student?.id}</td>
                        <td>{student?.name}</td>
                        {/*<td><button onClick={()=> setSelectedStudent(student.id)}>view</button></td>
                        <td><button onClick={()=> deleteStudent(student.id)}>delete</button></td>*/}
                            <td>
                                <Link to={`/student/${student.id}`}>View Details</Link><br/>
                                <Link to={`/editable/${student.id}`}>edit Details</Link>
                            </td>
                        </tr>) }
                
            </table>
        </div>
    )
}
export default ChildComponent;