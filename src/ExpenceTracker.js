import React, {useState} from 'react';
import AddTransection from './AddTransection';
import Balance from './Balance';
import History from './History';
import GlobalContext from './GlobalContext';
import './ExpenceTracker.css'

function ExpenceTracker() {
  let balance = useState(0)
  let income = useState(0)
  let expence = useState(0)
  let history = useState([/*{id: 1, name: 'history1', value: 10, type: 'income'}, {id: 2, name: 'history2', value: 20, type: 'expense'}, {id: 3, name: 'history3', value: 30, type: 'Income'}*/])
  return (
    
    <GlobalContext.Provider value ={{balance, income, expence, history}}>
      <div>
        <div className="ExpenceTracker">
          <h5>Expence Tracker By Shams </h5>
          
          <Balance />
          <br/>
          <History />
          <br/>
          <AddTransection />
        </div>
        <div style={{textAlign: 'center'}}> Github: <a href="https://github.com/Shamsyum">@shamsyum</a> </div>
        </div>
    </GlobalContext.Provider>
  );
}

export default ExpenceTracker;
