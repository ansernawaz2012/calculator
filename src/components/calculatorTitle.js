import React from 'react'; 
  
// Create Functional Component. 
 
const CalculatorTitle = (props) => { 
  return ( 
    <div className="calculator-title"> 
      { props.value }  
    </div> 
  ) 
} 
  
// Export Calculator Title. 
export default CalculatorTitle; 