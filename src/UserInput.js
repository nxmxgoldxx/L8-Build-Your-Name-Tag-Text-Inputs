import React, { Component } from "react";

class UserInput extends Component {
    state = {
    name: ""
    };

updateName = (event) => this.setState({ name: event.target.value }); 
    handleSubmit = (e) => {
    event.preventDefault();
    this.props.addName(this.state.name);
    this.setState({name: ""});
};
render() {
    return (
        <form onSubmit={this.handleSubmit}>
         {consolse.log(this.state)}
            <input
             type="text" 
             placeholder="Add a new name here..."
             value={this.state.name}
             onChange-{this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
        </form>
        );
    }
}


export default UserInput;