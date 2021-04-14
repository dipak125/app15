

import React, {useState} from "react";
import ChildComponent from "./ChildComponent";
import Student from "./Student";
import {BrowserRouter,Route,Link} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import StudentClass from "./StudentClass";
import Form from "./Form";


const App=()=>{

  const [state,setState]=useState({
        
    selectedStudent: null,
    students: [
      {
        id: 1,
        name: "dipak",
        age: 26
      },
      {
        id: 2,
        name: "sahil",
        age: 25
      },
      {
        id: 3,
        name: "dipankar",
        age: 25
      },
      {
        id: 4,
        name: "mrinal",
        age: 24
      },
      {
        id: 5,
        name: "Ankit",
        age: 24
      },
      {
        id: 6,
        name: "Akshay",
        age: 26
      },
      {
        id: 7,
        name: "deepyan",
        age: 26
      },
    ],
    student :{}
     
   } );
  
 const setSelectedStudent=(id)=>{
    setState({
      ...state,
      selectedStudent:id
    })
  }
 const deleteStudent=(id)=>{
    let s=this.state.students.filter(student=> student.id !==id)
    setState({
      ...state,
      students:[
        s
      ]
    })

  }
 const addStudent=(student)=>{
    let students=state.students.filter(n=>n.id!==student.id);
    console.log(student);
    setState({
      ...state,
      students:[
       ...students,
        student
      ]
    })
  }
 
    const student = state.students.find(student => student.id === state.selectedStudent);
    return(
        <div >
            <BrowserRouter>
              <Nav />
              <div>
                <Route  exact path="/" component={()=> <Home/>}/>
                <Route path="/students" component={()=> <ChildComponent students={state.students} setSelectedStudent={setSelectedStudent} deleteStudent={deleteStudent}/>}/>
                <Route path="/editable/:id" component={(props)=> <Form addStudent={addStudent} student={state.students.find(student=> student.id==props.match.params.id)}/>} /> 
                <Route path="/student/:id" component={(props)=> <Student student={state.students.find(student=> student.id==props.match.params.id)}  /> }/>
                <Route path="/edit" component={(props)=> <Form addStudent={addStudent} student={
                  {
                    id:"",
                    name:"",
                    age:""
                  }
                }/>} /> 
                
              </div>
            </BrowserRouter>
       
      {/*<div>
          
          <ChildComponent students={this.state.students} setSelectedStudent={this.setSelectedStudent} deleteStudent={this.deleteStudent}/>
          <Student student={student}/>
      </div>*/}
      </div>
    )
  }
export default App;