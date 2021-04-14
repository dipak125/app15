import React from "react";

const Student=(props)=>{
    let {student}= props;
   
    
    return(
        <div>
            <h1>Student Details:</h1>
            <div>{(student?.id) ? <div>
                <h3>id:{student.id}</h3>
                <h3>name: {student.name}</h3>
                <h3>age:{student.age}</h3>
            </div>:<div>please select to see details</div>}
        </div>
        </div>
    );
}
export default Student;