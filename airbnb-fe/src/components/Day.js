import React, {Component} from 'react'
import styled from 'styled-components'

const DaySquare = styled.div`
    box-sizing: border-box;
    width: 14%;
    border: solid black 1px;

`
class Day extends Component {
    state = {}

    render(){
        console.log(this.props.day)
        return(
            <DaySquare>
                {this.props.day.date === "blank" 
                    ? (<h4></h4>) 
                    : (<h4>{this.props.day.date}</h4>)
                }
            </DaySquare>
        )
    }
}

export default Day;