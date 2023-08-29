import {Component} from 'react';

export class ControlledInput extends Component {

state = {
    inputValue: "",
}

handleOnChange =({target})=>{
    this.setState({inputValue: target.value})
}

render() {
    const {inputValue} = this.state;
    return <input type='text' onChange={this.handleOnChange} value={inputValue}/>

}
}