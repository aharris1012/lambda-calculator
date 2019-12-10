
import React, {useState} from "react";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
import NumberButton from './NumberButton';
//Import your array data to from the provided data file
import {numbers} from '../../../data';


const Numbers = (props) => {
  
  const [buttonNumbers, setButtonNumbers]= useState(numbers);
  console.log(numbers);
  return (
    <div>
      {buttonNumbers.map(number =>{
        return
        <NumberButton text = {number} key = {number} addNumber = {props.addNumber} />
      })}
      
    </div>
  );
};

export default Numbers;