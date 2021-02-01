import React, {useContext} from 'react';
import GlobalContext from './GlobalContext';
import './ExpenceTracker.css'


function Balance(){
    let myState = useContext(GlobalContext);
    return(
        <div className="balance">
        
            <h4 className="current-balance">Current Balance <br/>
            <h2 className="amount">
                {`$${myState.balance[0]}`}
            </h2>
            </h4>
             
        <div className="income-expense">
        <div className="income">
                Income <br/>
                ${myState.income[0]} 
            </div>

            <div className="expense">
                Expence <br/>
                ${myState.expence[0]}
            </div>
        </div>
            
        </div>
    )
}

export default Balance;
