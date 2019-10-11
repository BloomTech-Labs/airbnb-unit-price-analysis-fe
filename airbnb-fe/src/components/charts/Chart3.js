import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';


function Chart3(props){

    const [data, setData] = useState({
        labels: ["Overall", "Cleanliness", "Host", "Cleanliness", "Cleanliness"],
        datasets: [
          {
            label: "You",
            backgroundColor: "#3c9684",
            data: [3,4,5,5,5,0] //<- 0 present for scaling purposes
          }, {
            label: "Them",
            backgroundColor: "#3be3ae",
            data: [4,5,5,5,5,0] //<- 0 present for scaling purposes
          }
        ]
      })

    return (
        <div style = {{ position: "relative", width: "100%", height: "100%" }}>
            <Bar
                options = {{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            barPercentage: 0.5,
                            barThickness: 50,
                            maxBarThickness: 70,
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)" //<- hides gridlines
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)" //<- hides gridlines
                            }
                        }]
                    }
                }}
                data = {data}
            />
        </div>
    )
}

export default Chart3;