
import React, { useState } from 'react'
import todo from "../images/todo.svg";

const Todo = () =>{
    const [inputData,setInputData]=useState('');
    const [items,setItems]=useState([]);

    const addItem =()=>{
if(!inputData){

}
else{

        //prevoius data save nai horaha tha jo bhe add kar raha tha puranay walay ko replace kr raha he to phr hum ...item lagaengay takay prevoius bhe add hojae or agay walay jitnay bhe hen

setItems([...items,inputData]);
setInputData('')
    }
}

// delte items
const deleteItem =(id)=>{
    const updatedItems=items.filter((elem,ind)=>{
        return ind !== id
    });
    setItems(updatedItems);//setitems kay andar same wala delete krkay baqi aisai show hojae
}
//removeAll
const removeAll =()=>{

    setItems([]);
}
    return(
        
<> 
<div className='main-div'>
      <div className='child-div'>
          <figure>
          <img src={todo} alt="todologo"/>
              <figcaption>Add to list here</figcaption>
          </figure>
          <div className='addItems'>
          <input type="text" placeholder="✍ Add Items..." 
          value={inputData} //data inputedata men ajaega
          onChange={(e) =>setInputData(e.target.value)} 
            
          />
          <i className ="fa fa-plus add-btn" title="Add Item" onClick={addItem} ></i>

    </div>
    
    <div className="showItems">
  
    </div>

    {/* clear all  */}



    
    <div className="showItems">
        {/* //elem means current elemnt  */}
        {
            items.map((elem,index)=>{
                return(
                    <div className="eachItem" key={index}>
                    <h3>{elem}</h3>
              
                     <i className="far fa-trash-alt add-btn" title="Delete I tem" onClick={()=>deleteItem(index)}></i>
              
                  </div>
                )
            })
        }
    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll} ><span>Check List</span></button>

    </div>
    </div>
    </div>
</>
       
    )
}
export default Todo  