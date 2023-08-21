import { Component } from "react";

export class Switcher extends Component {
    state = {
        isOpened: false,
    };

    toggle =()=>this.setState((state) => ({isOpened:!state.isOpened}) ); 

    render() {
        const {isOpened} = this.state;
        const {children} = this.props;
        return <>
        <button type="button" onClick={this.toggle}>{isOpened ? 'HIDE':'SHOW'}</button>
        {isOpened && children}
        </>
    }
} 