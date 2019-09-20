import React, {Component} from 'react'

class Day extends Component {
    state = {}

    render(){
        console.log(this.props.day)
        return(
            <div>{this.props.day.date}</div>
        )
    }
}

export default Day;