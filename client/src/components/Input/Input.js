import React from "react";


const Input = () => (
    
 < div className = "Row" >
   <div className ="col-md-4">
         <h4>Articles</h4>
    <p>
        <input type="text"  placeholder="Articles"></input>
    </p>
           <p> Start Date: </p>
    <p>
        <input type="date"  min="2000-01-02"></input>
   </p>
    
               <p> End Date: </p>
    <p>
        <input type="date"  min="2000-01-02"></input>
   </p>
</div>
</div>

    
);

export default Input;