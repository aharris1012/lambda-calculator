import React from "react";
import SpecialButton from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file
import {specials} from '../../../data';


const Specials = (props) => {
  // STEP 2 - add the imported data to state

  
  
  
  
  return (
    <div>
      {specials.map(special => 
        <SpecialButton text= {special}/>)}
    </div>
  );
};
export default Specials;
