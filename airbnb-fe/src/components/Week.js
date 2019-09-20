import React, {Component} from 'react';
import Day from './Day';

class Week extends Component {
    state = {

    }

    render(){
        console.log(this.props.week)
        return(
            <div>
                {this.props.week.map(day => {
                    return(
                        <Day day = {day} key = {Math.random()}/>
                    )
                })}
            </div>
        )
    }
}

export default Week;