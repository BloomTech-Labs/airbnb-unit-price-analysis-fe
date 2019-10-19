import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



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

      useEffect(() => {
        if(props.comparisonFetched){
            setData({
                labels: ["Overall", "Cleanliness", "Communication", "Location", "Value"],
                datasets: [ 
                {
                    label: "You",
                    backgroundColor: "#3c9684",
                    data: [
                        props.listing.review_scores_rating / 10,
                        props.listing.review_scores_cleanliness,
                        props.listing.review_scores_communication,
                        props.listing.review_scores_location,
                        props.listing.review_scores_value,
                        //--------------
                        0               //<- 0 present for scaling purposes
                    ] 
                },
                {
                    label: "Them",
                    backgroundColor: "#3be3ae",
                    data: [
                        props.comparison.review_scores_rating / 10,
                        props.comparison.review_scores_cleanliness,
                        props.comparison.review_scores_communication,
                        props.comparison.review_scores_location,
                        props.comparison.review_scores_value,
                        //--------------
                        0               //<- 0 present for scaling purposes
                    ] 
                }
                ]
            })}
      }, [props.comparisonFetched])

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


const mapStateToProps = (state) => {
  return {
      comparison: state.comparison,
      comparisonFetched: state.comparisonFetched
  }
}

export default connect(mapStateToProps, {})(withRouter(Chart3));
