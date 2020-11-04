import React, {useContext} from 'react';
import GlobalContext from './GlobalContext';
import ShowHistory from './ShowHistory';
import './ExpenceTracker.css'


function History(){
    let myState = useContext(GlobalContext);
    return(
        <div className="history">
            
            <h4>Transection History</h4>
            
            {myState.history[0].map(history =>
                <ShowHistory key={history.id} history={history} />
            )}      
        </div>
    )
}

export default History;
