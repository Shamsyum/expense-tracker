import userEvent from '@testing-library/user-event';
import React, {useContext, useRef} from 'react';
import GlobalContext from './GlobalContext';

function ShowHistory(props){
    let myState = useContext(GlobalContext);
    let myId;

    function removeItem(){
        myState.history[1](myState.history[0].splice(myId, 1))
    }
    function handleMouseEnter(){
        
    }
    return(
        <div className="history-item">
            <div className="history-name">
                {`$${props.history.name}`}
            </div>
            <div className="history-value">
                
            {`$${props.history.value}`}
                
            </div>
            <br/>
            
        </div>
    )
}

export default ShowHistory;