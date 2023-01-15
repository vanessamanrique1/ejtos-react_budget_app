import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

 const Currency = (props) => {
     const [currency,setCurrency] =useState('');
     const {dispatch}= useContext (AppContext);

     const changeCurrency = (event)=>{
         dispatch ({
             type: 'CHG_CURRENCY',
             payload:event.target.value,
         });
        setCurrency(event.target.value);
        return;
     }

     return (

        <div>
            
             <select className= " btn btn-success dropdown-toggle" id="currency" style={{backgroundcolor:'light green', color:'white'}} onChange= {(event)=>changeCurrency(event)}>Currency {currency}
                 <option defaultValue={currency} >Currency ({currency}) </option> 
                 <option value="£">£ Pound </option>
                 <option value="$">$ Dollar</option>
                 <option value="€">€ Euro</option>
                 <option value="₹">₹ Rupee</option>
                
             </select>
            
             </div>
      
         
     );
 };

 export default Currency;
