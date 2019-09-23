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
        return(
            <DaySquare>
                {this.props.day.date === "blank" 
                    ? (<></>) 
                    : (<h4>{this.props.day.date}</h4>)
                }
            </DaySquare>
        )
    }
}

export default Day;