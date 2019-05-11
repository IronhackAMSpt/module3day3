import React, {Component} from "react";

class Tas extends Component {

    state = {
        name: this.props.name,
        gender: this.props.gender
    }

    render() {
        return (
            <div>{this.state.name} is a {this.state.gender}</div>
        )
    }
}

export default Tas;