import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch,expenses} = useContext(AppContext);

    const changeBudget = (val)=>{
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (val<totalExpenses){
            alert ("You cannot reduce the budget that is already allocated");
        } else {
            dispatch ({
                type: 'SET_BUDGET',
                payload: val,
            })
        }
         
        
        if (val>20000){
            alert ("You exceed maximum budget allowed 20,000");
        } else {
            dispatch ({
                type: 'SET_BUDGET',
                payload: val,
            })
        }

    
    }

    return (
        <div className='alert alert-secondary'> Budget : £
            <input type= "number"  step="10" min= "0" max="20000" value={budget} onInput= {(event)=>changeBudget(event.target.value)}></input>

            
        </div>
    );
};

export default Budget;

