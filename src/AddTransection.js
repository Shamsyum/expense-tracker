import React, {useRef, useContext} from 'react';
import GlobalContext from './GlobalContext';


function AddTransection(){
    const description = useRef();
    const amount = useRef();
    

    let myState = useContext(GlobalContext);

    function addIncome(){ 
        if(amount.current.value < 1 || description.current.value == null){
            alert("Incorrect Value or Description")
        }else{
            myState.balance[1](myState.balance[0] + Number(amount.current.value));
            myState.income[1](myState.income[0] + Number(amount.current.value)); 
            myState.history[1]([...myState.history[0],
                    {
                        id: myState.history[0].length + 1, name: description.current.value, value: amount.current.value, type: 'Income'
                    }
                ]
            ); 
        }
        
    }

    function addExpence(){
        if(amount.current.value < 1 || description.current.value == null){
            alert("Incorrect Value or Description")
        }else{
                myState.balance[1](myState.balance[0] - Number(amount.current.value));
                myState.expence[1](myState.expence[0] + Number(amount.current.value));
                myState.history[1]([...myState.history[0],
                    {
                        id: myState.history[0].length + 1, name: description.current.value, value: amount.current.value, type: 'expence'
                    }
                ]
            );
        }
        
    }

    return(
        <div className="add-transection">
            <h4>Add Transection</h4>
            
            Description:
            <br/>
            <input type="text" ref={description} />
            <br/>
            Amount:
            <br/>
            <input type="number" ref={amount} />
            <br/>
            <br/>
            <button onClick={addIncome}>Add Income</button>
            <button onClick={addExpence}>Add Expence</button>
            <br/>
            <br/>
        </div>
    )
}

export default AddTransection;
