import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';


function Chart2(props){

    const [data, setData] = useState({
        labels: ["10", "20", "30", "40", "50", "60", "70"],
        datasets: [
          {
              label: "Percentile",
              backgroundColor: "#3be3ae",
              data: [0, 8, 18, 32, 18, 8, 0] 
          },
        //   {
        //       label: "Subscriptions",
        //       backgroundColor: "yellow",
        //       data: [14, 15, 21, 0, 12, 24, 32] 
        //   },
        ]
      })

    // useEffect(() => {
    //     if(data.labels.length === 0){
    //         setData({
    //             labels: ["1", "2", "3", "4", "5"],
    //             datasets: [
    //               {
    //                   label: "Videos Mades",
    //                   backgroundColor: "tomato",
    //                   data: [4, 5, 1, 10, 32, 2, 12] 
    //               },
    //               {
    //                   label: "Subscriptions",
    //                   backgroundColor: "yellow",
    //                   data: [14, 15, 21, 0, 12, 24, 32] 
    //               },
    //             ]
    //           }
    //         )
    //     }

    // }, [data])


    return (
        <div style = {{ position: "relative", width: "100%", height: "100%" }}>
            <Line
                options = {{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
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

export default Chart2;