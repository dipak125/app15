import React, {useState} from "react";

const Form =(props)=>{

    
    
        
        const [state,setState]=useState({
            s: props.student,
        

            validation: "",
            error: ""
        });
        
    
  const  Change=(e)=>{
            const {name,value}=e.target;
           if(name==="age" && isNaN(value))
           {
                setState({
                    ...state,
                    s:{
                        ...state.s,
                        age:""
                    },
                    validation: "age should be a number"
                })

           }else{
                    setState({
                        ...state,
                        s:{
                            ...state.s,
                            [name]:value
                        },
                        validation: ""
                    })
           }
           
    }
    console.log(state.s);
  let  Submit=()=>{
    console.log(state.s);
        const {id,name,age}=state.s;
        if(id && name&& age)
        {
            setState({
                ...state,
                error:""
            })
            console.log(state.s);
            props.addStudent(state.s);
        }
        else
        {
            setState({
                ...state,
                error: "please fill data"
            })
        }
    }
  
    
       return(
        <>
        <div>{state.error}</div>
        <form>
<div class="mb-3">
    
<label HtmmFor="exampleInputPassword1t" class="form-label">Id</label>
<input type="text" class="form-control" name="id" value={state.s.id} onChange={Change}/>

</div>
<div class="mb-3">
<label  HtmmFor="exampleInputPassword1" class="form-label">Name</label>
<input type="text" class="form-control" name="name"  value={state.s.name} onChange={Change}/>
</div>
<div class="mb-3">
<label  HtmmFor="exampleInputPassword1" class="form-label">age</label>
<input type="text" class="form-control" name="age" value={state.s.age} onChange={Change}/>
<div>{state.validation}</div>
</div>

<button type="button" onClick={Submit}class="btn btn-primary">Submit</button>
</form>
    </>
       )
   }
   export default Form;

