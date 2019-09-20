import React, {Component} from 'react';
import Week from './Week';

class Calendar extends Component {
    state = {
        September: [
            {
                date: '09/1/2019'
            },
            {
                date: '09/2/2019'
            },
            {
                date: '09/3/2019'
            },
            {
                date: '09/4/2019'
            },
            {
                date: '09/5/2019'
            },
            {
                date: '09/6/2019'
            },
            {
                date: '09/7/2019'
            },
            {
                date: '09/8/2019'
            },
            {
                date: '09/9/2019'
            },
            {
                date: '09/10/2019'
            },
            {
                date: '09/11/2019'
            },
            {
                date: '09/12/2019'
            },
            {
                date: '09/13/2019'
            },
            {
                date: '09/14/2019'
            },
            {
                date: '09/15/2019'
            },
            {
                date: '09/16/2019'
            },
            {
                date: '09/17/2019'
            },
            {
                date: '09/18/2019'
            },
            {
                date: '09/19/2019'
            },
            {
                date: '09/20/2019'
            },
            {
                date: '09/21/2019'
            },
            {
                date: '09/22/2019'
            },
            {
                date: '09/23/2019'
            },
            {
                date: '09/24/2019'
            },
            {
                date: '09/25/2019'
            },
            {
                date: '09/26/2019'
            },
            {
                date: '09/27/2019'
            },
            {
                date: '09/28/2019'
            },
            {
                date: '09/29/2019'
            },
            {
                date: '09/30/2019'
            },
            
        ]
    }

    monthToWeeks = () => {
        let weeks = [
            [], [], [], [], []
        ]
        // Day of week of first day of month
        const firstDay = new Date(this.state.September[0].date).getDay(); 
        // Adds blank days to beginning of first week
        for(let i = 0; i < firstDay; i++){ 
            weeks[0].unshift({
                date: "blank"
            })
        }
        //Populate weeks
        let weekIterator = 0
        for(let i = 0; i < this.state.September.length; i++){
            if (new Date(this.state.September[i].date).getDay() === 0 && weeks[0].length !== 0){
                weekIterator++ // If day is Sunday and first week isn't empty, move on to next week
            }
            weeks[weekIterator].push(this.state.September[i])
        }
        return weeks
    }


    render(){
        let calendarArray = this.monthToWeeks()
        return(
            <div>
                {calendarArray.map(week => {
                    return(
                        <Week week = {week} key = {Math.random()} />
                    )
                })}
            </div>
        )
    }
}

export default Calendar;