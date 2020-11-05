
import React, {useContext} from 'react';
import GlobalContext from './GlobalContext';

function ShowHistory(props){
    let myState = useContext(GlobalContext);
    
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