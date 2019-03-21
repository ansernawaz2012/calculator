import React from 'react';
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';
import * as math from 'mathjs';

class Calculator extends React.Component {

  constructor() {
  super();
  // set our default state
  this.state = {
    question: '',
    answer: ''
  }

  
//   this.handleClick = this.handleClick.bind(this);
}
//  tempQuestion = '';
    

    render()
    {
     let operatorClass = 'operatorButton';
     let normalButton = 'normalButton';
    return (
     
    <div className="frame">
    <CalculatorTitle value="React Calculator"/>
    <div className="mainCalc">
    <OutputScreen answer = {this.state.answer} question = {this.state.question}/>
    <div className="button-row">
      <Button buttonClass = {normalButton} label={'Clear'} handleClick = {this.handleClick}/>
      <Button buttonClass = {normalButton} label={'Delete'} handleClick = {this.handleClick}/>
      <Button buttonClass = {normalButton} label={'.'}  handleClick = {this.handleClick}/>
      <Button buttonClass = {operatorClass} label={'/'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button buttonClass = {normalButton} label={'7'} handleClick = {this.handleClick}/>
      <Button buttonClass = {normalButton} label={'8'} handleClick = {this.handleClick}/>
      <Button buttonClass = {normalButton} label={'9'} handleClick = {this.handleClick}/>
      <Button buttonClass = {operatorClass} label={'*'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button buttonClass = {normalButton} label={'4'} handleClick = {this.handleClick}/>
      <Button buttonClass = {normalButton} label={'5'} handleClick = {this.handleClick}/>
      <Button buttonClass = {normalButton} label={'6'} handleClick = {this.handleClick}/>
      <Button buttonClass = {operatorClass} label={'-'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button buttonClass = {normalButton} label={'1'} handleClick = {this.handleClick}/>
      <Button buttonClass = {normalButton} label={'2'} handleClick = {this.handleClick}/>
      <Button buttonClass = {normalButton} label={'3'} handleClick = {this.handleClick}/>
      <Button buttonClass = {operatorClass} label={'+'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button buttonClass = {normalButton} label={'0'} handleClick = {this.handleClick} />
      <Button buttonClass = {operatorClass} label={'='} handleClick = {this.handleClick}/>
    </div>
    </div>
    </div>
    );
  }

  // our method to handle all click events from our buttons
  handleClick =(event)=>{

    // get the value from the target element (button)
    const value = event.target.value;

    switch (value) {
      case '=': {
        
    		if(this.state.question!=='')
        {
    			var ans='';
    		  try
    			{
            ans = math.eval(this.state.question);
          //  ans = new Function('return ' + this.state.question)();
           
    			}
    			catch(err)
    			{
    				this.setState({answer: "Math Error"});
    			}
    			if(ans===undefined)
    				this.setState({answer: "Math Error"});
    			// update answer in our state.
    			else
    				this.setState({ answer: ans , question: ''});
    			// break;
        }
        break;
      }
      case 'Clear': {
        // if it's the Clears sign, just clean our
        // question and answer in the state
        this.setState({ question: '', answer: '' });
        break;
      }

	  case 'Delete': {
	    let str = this.state.question;
  		str = str.substr(0,str.length-1);
  		this.setState({question: str});
  		break;
	  }

    default: {
        // for every other commmand, update the answer in the state
        let tempQuestion = this.state.question;
        tempQuestion += value;
        this.setState({ question: tempQuestion, answer: ''})
        break;
      }
    }
  }

}

// Export Calculator Component.
export default Calculator;