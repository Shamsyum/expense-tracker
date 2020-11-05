import React from 'react';

function ShowHistory(props){
    
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