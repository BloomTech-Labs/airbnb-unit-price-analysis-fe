import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



function Chart2(props){

    const [data, setData] = useState({
        // labels: ["10", "20", "30", "40", "50", "60", "70"],
        labels: [10, 20, 30, 40, 50, 60, 70],
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


    

    useEffect(() => {
        if(props.pricingFetched){
            setData({
                ...data,
                labels: props.pricingPercentile.percentiles,
                datasets: [
                    {
                        label: "Count per price",
                        backgroundColor: "#3be3ae",
                        data: props.listingsPerPercentile
                    }
                ]
            })
        }
    }, [props.pricingFetched])


    return (
        <div style = {{ position: "relative", width: "100%", height: "100%", border: "solid black 1px" }}>
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

const mapStateToProps = (state) => {
    return {
        pricingFetched: state.pricingFetched
    }
  }
  
  export default connect(mapStateToProps, {})(withRouter(Chart2));