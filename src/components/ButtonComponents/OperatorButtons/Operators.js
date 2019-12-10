import React from "react";
import OperatorButton from './OperatorButton';
//import any components needed

//Import your array data to from the provided data file
import {operators} from '../../../data';

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map(operator => 
        <OperatorButton operator={operator} addOperator = {props.addOperator} />)}
    </div>
  );
};
export default Operators;
